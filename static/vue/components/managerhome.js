const ManagerHome = Vue.component('managerhome', {
    template: `
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
        </div>

        <section class="section dashboard">
            <div class="row">
                <!-- Key Metrics Cards -->
                <div class="col-lg-3 col-md-6">
                    <div class="card info-card leads-card">
                        <div class="card-body">
                            <h5 class="card-title">Total Leads</h5>
                            <div class="d-flex align-items-center">
                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i class="bi bi-people"></i>
                                </div>
                                <div class="ps-3">
                                    <h6>{{ totalLeads }}</h6>
                                    <span class="text-success small pt-1 fw-bold">{{ leadGrowthRate }}%</span>
                                    <span class="text-muted small pt-2 ps-1">increase</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="card info-card conversion-card">
                        <div class="card-body">
                            <h5 class="card-title">Conversion Rate</h5>
                            <div class="d-flex align-items-center">
                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i class="bi bi-graph-up"></i>
                                </div>
                                <div class="ps-3">
                                    <h6>{{ conversionRate }}%</h6>
                                    <span class="text-success small pt-1 fw-bold">{{ conversionRateChange }}%</span>
                                    <span class="text-muted small pt-2 ps-1">increase</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Charts -->
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Lead Trends</h5>
                            <div ref="leadTrendsChart"></div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Top Company Fields</h5>
                            <div ref="topCompanyFieldsChart"></div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Regional Distribution</h5>
                            <div ref="regionalDistributionChart"></div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Engagement Metrics</h5>
                            <div ref="engagementMetricsChart"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    `,

    data() {
        return {
            totalLeads: 0,
            leadGrowthRate: 0,
            conversionRate: 0,
            conversionRateChange: 0,
            leadTrendsData: [],
            topCompanyFields: [],
            regionalDistribution: [],
            engagementMetrics: [],
            token: localStorage.getItem('auth-token'),
            userRole: localStorage.getItem('role')
        };
    },

    mounted() {
        this.fetchDashboardData();
        document.title = "Dashboard";
    },

    methods: {
        async fetchDashboardData() {
            try {
                const response = await fetch('/api/dashboard-data', {
                    headers: {
                        "Content-Type": "application/json",
                        "Authentication-Token": this.token,
                        "Authentication-Role": this.userRole,}
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Error fetching dashboard data: ${response.status} ${response.statusText} - ${errorText}`);
                }
                const data = await response.json();
                this.updateDashboardData(data);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        },

        updateDashboardData(data) {
            this.totalLeads = data.totalLeads;
            this.leadGrowthRate = data.leadGrowthRate;
            this.conversionRate = data.conversionRate;
            this.conversionRateChange = data.conversionRateChange;
            this.leadTrendsData = data.leadTrendsData;
            this.topCompanyFields = data.topCompanyFields;
            this.regionalDistribution = data.regionalDistribution;
            this.engagementMetrics = data.engagementMetrics;

            this.renderCharts();
        },

        renderCharts() {
            this.renderLeadTrendsChart();
            this.renderTopCompanyFieldsChart();
            this.renderRegionalDistributionChart();
            this.renderEngagementMetricsChart();
        },

        renderLeadTrendsChart() {
            const chart = new ApexCharts(this.$refs.leadTrendsChart, {
                series: [{
                    name: 'Leads',
                    data: this.leadTrendsData.map(item => item.value)
                }],
                chart: {
                    type: 'area',
                    height: 350,
                    toolbar: {
                        show: false
                    }
                },
                xaxis: {
                    categories: this.leadTrendsData.map(item => item.date)
                },
                yaxis: {
                    title: {
                        text: 'Number of Leads'
                    }
                },
                fill: {
                    type: 'gradient'
                }
            });

            chart.render();
        },

        renderTopCompanyFieldsChart() {
            const chart = new ApexCharts(this.$refs.topCompanyFieldsChart, {
                series: this.topCompanyFields.map(item => item.value),
                chart: {
                    type: 'pie',
                    height: 350
                },
                labels: this.topCompanyFields.map(item => item.field),
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            });

            chart.render();
        },

        renderRegionalDistributionChart() {
            const chart = new ApexCharts(this.$refs.regionalDistributionChart, {
                series: [{
                    name: 'Leads',
                    data: this.regionalDistribution.map(item => item.value)
                }],
                chart: {
                    type: 'bar',
                    height: 350
                },
                xaxis: {
                    categories: this.regionalDistribution.map(item => item.region)
                },
                yaxis: {
                    title: {
                        text: 'Number of Leads'
                    }
                }
            });

            chart.render();
        },

        renderEngagementMetricsChart() {
            const chart = new ApexCharts(this.$refs.engagementMetricsChart, {
                series: this.engagementMetrics.map(item => item.value),
                chart: {
                    type: 'radialBar',
                    height: 350
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                                }
                            }
                        }
                    }
                },
                labels: this.engagementMetrics.map(item => item.metric)
            });

            chart.render();
        }
    }
});

export default ManagerHome;