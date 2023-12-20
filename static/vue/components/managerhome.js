
const ManagerHome =Vue.component('managerhome', {
    template: `<main id="main" class="main">

    <div class="pagetitle">
        <h1>Dashboard</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active">Dashboard</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section dashboard">
        <div class="row">

            <!-- Left side columns -->
            <div class="col-lg-8">
                <div class="row">

                    <!-- Leads Card -->
                    <div class="col-xxl-4 col-md-6">
                        <div class="card info-card leads-card">

                            <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown"><i
                                        class="bi bi-three-dots"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li class="dropdown-header text-start">
                                        <h6>Filter</h6>
                                    </li>

                                    <li><a class="dropdown-item" href="#">Today</a></li>
                                    <li><a class="dropdown-item" href="#">This Month</a></li>
                                    <li><a class="dropdown-item" href="#">This Year</a></li>
                                </ul>
                            </div>

                            <div class="card-body">
                                <h5 class="card-title">Leads <span>| Today</span></h5>

                                <div class="d-flex align-items-center">
                                    <div
                                        class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <i class="bi bi-people"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h6>256</h6>
                                        <span class="text-success small pt-1 fw-bold">15%</span> <span
                                            class="text-muted small pt-2 ps-1">increase</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- End Leads Card -->

                    <!-- Confirmed Card -->
                    <div class="col-xxl-4 col-md-6">
                        <div class="card info-card revenue-card">

                            <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown"><i
                                        class="bi bi-three-dots"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li class="dropdown-header text-start">
                                        <h6>Filter</h6>
                                    </li>

                                    <li><a class="dropdown-item" href="#">Today</a></li>
                                    <li><a class="dropdown-item" href="#">This Month</a></li>
                                    <li><a class="dropdown-item" href="#">This Year</a></li>
                                </ul>
                            </div>

                            <div class="card-body">
                                <h5 class="card-title">Confirmed <span>| Today</span></h5>

                                <div class="d-flex align-items-center">
                                    <div
                                        class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <i class="bi bi-person"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h6>64</h6>
                                        <span class="text-success small pt-1 fw-bold">8%</span> <span
                                            class="text-muted small pt-2 ps-1">increase</span>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div><!-- End Confirmed Card -->

                    <!-- Revenue Card -->
                    <div class="col-xxl-4 col-xl-12">

                        <div class="card info-card customers-card">

                            <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown"><i
                                        class="bi bi-three-dots"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li class="dropdown-header text-start">
                                        <h6>Filter</h6>
                                    </li>

                                    <li><a class="dropdown-item" href="#">Today</a></li>
                                    <li><a class="dropdown-item" href="#">This Month</a></li>
                                    <li><a class="dropdown-item" href="#">This Year</a></li>
                                </ul>
                            </div>

                            <div class="card-body">
                                <h5 class="card-title">Revenue <span>| Today</span></h5>

                                <div class="d-flex align-items-center">
                                    <div
                                        class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <i class="bi bi-currency-dollar"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h6>$12,044</h6>
                                        <span class="text-danger small pt-1 fw-bold">12%</span> <span
                                            class="text-muted small pt-2 ps-1">decrease</span>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div><!-- End Revenue Card -->

                    <!-- Reports -->
                    <div class="col-12">
                        <div class="card">

                            <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown"><i
                                        class="bi bi-three-dots"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li class="dropdown-header text-start">
                                        <h6>Filter</h6>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Today</a></li>
                                    <li><a class="dropdown-item" href="#">This Month</a></li>
                                    <li><a class="dropdown-item" href="#">This Year</a></li>
                                </ul>
                            </div>

                            <div class="card-body">
                                <h5 class="card-title">Reports <span>/ Today</span></h5>

                                <!-- Report Data -->
                                <div class="report-data">
                                    <div class="report-item">
                                        <h6>Total Leads</h6>
                                        <p class="value">256</p>
                                    </div>
                                    <div class="report-item">
                                        <h6>Contacted</h6>
                                        <p class="value">120</p>
                                    </div>
                                    <div class="report-item">
                                        <h6>Confirmed</h6>
                                        <p class="value">85</p>
                                    </div>
                                    <div class="report-item">
                                        <h6>Total Revenue</h6>
                                        <p class="value">$15,000</p>
                                    </div>
                                </div>
                                <!-- End Report Data -->

                                <!-- Line Chart -->
                                
                                <div ref="chart"></div>
                                
                                <!-- End Line Chart -->

                            </div>

                        </div>
                    </div>
                    <!-- End Reports -->

                    <!-- Inquiries -->
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Inquiries</h5>
                                <!-- Button to add Inquiry -->
                                <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal"
                                    data-bs-target="#verticalycentered">
                                    <i class="bi bi-emoji-smile me-1"></i> Add Inquiry
                                </button>

                                <!-- Vertically centered Modal -->
                                <div class="modal fade" id="verticalycentered" tabindex="-1">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Lead Capture Details</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form class="row g-3">
                                                    <div class="col-md-6">
                                                        <div class="form-floating">
                                                            <input type="text" class="form-control"
                                                                id="floatingName" placeholder="Lead Name">
                                                            <label for="floatingName">Lead Name</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-floating">
                                                            <select class="form-select" id="floatingClientType"
                                                                aria-label="Client Type">
                                                                <option selected disabled>Choose...</option>
                                                                <option value="Corporate">Corporate</option>
                                                                <option value="Private">Private</option>
                                                                <option value="Daily Catering">Daily Catering
                                                                </option>
                                                                <option value="Delivery">Delivery</option>
                                                            </select>
                                                            <label for="floatingClientType">Client Type</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-floating">
                                                            <select class="form-select" id="floatingSources"
                                                                aria-label="Sources">
                                                                <option selected disabled>Choose...</option>
                                                                <option value="Call">Call</option>
                                                                <option value="Email">Email</option>
                                                                <option value="Social Media">Social Media</option>
                                                                <option value="WhatsApp">WhatsApp</option>
                                                                <option value="Referral">Referral</option>
                                                                <option value="Google Ad">Google Ad</option>
                                                            </select>
                                                            <label for="floatingSources">Sources</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-floating">
                                                            <input type="text" class="form-control"
                                                                id="floatingCompanyName" placeholder="Company Name">
                                                            <label for="floatingCompanyName">Company Name</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-floating">
                                                            <input type="date" class="form-control"
                                                                id="floatingEventDate"
                                                                placeholder="Date of the Event">
                                                            <label for="floatingEventDate">Date of the Event</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-floating">
                                                            <input type="number" class="form-control"
                                                                id="floatingPax" placeholder="No. of Pax">
                                                            <label for="floatingPax">No. of Pax</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-floating">
                                                            <input type="email" class="form-control"
                                                                id="floatingEmail" placeholder="Email address">
                                                            <label for="floatingEmail">Email address</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-floating">
                                                            <input type="tel" class="form-control"
                                                                id="floatingContactNumber"
                                                                placeholder="Contact number" value="+971">
                                                            <label for="floatingContactNumber">Contact
                                                                number</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-floating">
                                                            <div>Status:</div>
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio"
                                                                    name="status" id="statusInProgress"
                                                                    value="In progress">
                                                                <label class="form-check-label"
                                                                    for="statusInProgress">In progress</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio"
                                                                    name="status" id="statusConfirmed"
                                                                    value="Confirmed">
                                                                <label class="form-check-label"
                                                                    for="statusConfirmed">Confirmed</label>
                                                            </div>
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio"
                                                                    name="status" id="statusLost" value="Lost">
                                                                <label class="form-check-label"
                                                                    for="statusLost">Lost</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 text-center">
                                                        <button type="submit"
                                                            class="btn btn-primary">Submit</button>
                                                        <button type="reset"
                                                            class="btn btn-secondary">Reset</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Vertically centered Modal -->

                                <!-- Data Table -->
                                <div class="table-responsive">
                                    <table class="table datatable">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Lead Name</th>
                                                <th scope="col">Client Type</th>
                                                <th scope="col">Sources</th>
                                                <th scope="col">D.O.E</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Contact</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Brandon Jacob</td>
                                                <td>Corporate</td>
                                                <td>Call</td>
                                                <td>2023-07-10</td>
                                                <td>
                                                    <span class="badge bg-progress badge-pill"><i
                                                            class="bi bi-emoji-neutral me-1"></i> In
                                                        Progress</span>
                                                </td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button class="btn btn-sm btn-primary dropdown-toggle"
                                                            type="button" data-bs-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">
                                                            <i class="bi bi-telephone"></i>
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item"
                                                                href="mailto:brandon@example.com">Email:
                                                                brandon@example.com</a>
                                                            <a class="dropdown-item" href="tel:1234567890">Contact
                                                                Number: 1234567890</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Bridie Kessler</td>
                                                <td>Private</td>
                                                <td>Email</td>
                                                <td>2023-07-15</td>
                                                <td>
                                                    <span class="badge bg-confirmed badge-pill"><i
                                                            class="bi bi-emoji-sunglasses me-1"></i>
                                                        Confirmed</span>
                                                </td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button class="btn btn-sm btn-primary dropdown-toggle"
                                                            type="button" data-bs-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">
                                                            <i class="bi bi-telephone"></i>
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item"
                                                                href="mailto:bridie@example.com">Email:
                                                                bridie@example.com</a>
                                                            <a class="dropdown-item" href="tel:9876543210">Contact
                                                                Number: 9876543210</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Ashleigh Langosh</td>
                                                <td>Daily Catering</td>
                                                <td>Social Media</td>
                                                <td>2023-07-20</td>
                                                <td>
                                                    <span class="badge bg-lost badge-pill"><i
                                                            class="bi bi-emoji-frown me-1"></i> Lost</span>
                                                </td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button class="btn btn-sm btn-primary dropdown-toggle"
                                                            type="button" data-bs-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">
                                                            <i class="bi bi-telephone"></i>
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item"
                                                                href="mailto:ashleigh@example.com">Email:
                                                                ashleigh@example.com</a>
                                                            <a class="dropdown-item" href="tel:4567890123">Contact
                                                                Number: 4567890123</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Angus Grady</td>
                                                <td>Delivery</td>
                                                <td>WhatsApp</td>
                                                <td>2023-07-25</td>
                                                <td>
                                                    <span class="badge bg-confirmed badge-pill"><i
                                                            class="bi bi-emoji-sunglasses me-1"></i>
                                                        Confirmed</span>
                                                </td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button class="btn btn-sm btn-primary dropdown-toggle"
                                                            type="button" data-bs-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">
                                                            <i class="bi bi-telephone"></i>
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item"
                                                                href="mailto:angus@example.com">Email:
                                                                angus@example.com</a>
                                                            <a class="dropdown-item" href="tel:8901234567">Contact
                                                                Number: 8901234567</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Raheem Lehner</td>
                                                <td>Corporate</td>
                                                <td>Referral</td>
                                                <td>2023-07-30</td>
                                                <td>
                                                    <span class="badge bg-lost badge-pill"><i
                                                            class="bi bi-emoji-frown me-1"></i> Lost</span>
                                                </td>
                                                <td>
                                                    <div class="dropdown">
                                                        <button class="btn btn-sm btn-primary dropdown-toggle"
                                                            type="button" data-bs-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">
                                                            <i class="bi bi-telephone"></i>
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item"
                                                                href="mailto:raheem@example.com">Email:
                                                                raheem@example.com</a>
                                                            <a class="dropdown-item" href="tel:2345678901">Contact
                                                                Number: 2345678901</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- End Data Table -->

                            </div>
                        </div>
                    </div>
                    <!-- End Inquiries -->

                    <!-- Best Leads -->
                    <div class="col-12">
                        <div class="card best-leads overflow-auto">

                            <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown"><i
                                        class="bi bi-three-dots"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li class="dropdown-header text-start">
                                        <h6>Filter</h6>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Today</a></li>
                                    <li><a class="dropdown-item" href="#">This Month</a></li>
                                    <li><a class="dropdown-item" href="#">This Year</a></li>
                                </ul>
                            </div>

                            <div class="card-body pb-0">
                                <h5 class="card-title">Best Leads <span>| Today</span></h5>

                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Lead Name</th>
                                            <th scope="col">Date of Event</th>
                                            <th scope="col">No. of Pax</th>
                                            <th scope="col">Cost</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#2457</td>
                                            <td>Brandon Jacob</td>
                                            <td>2023-06-30</td>
                                            <td class="fw-bold">100</td>
                                            <td>$500</td>
                                            <td>$750</td>
                                            <td>$250</td>
                                        </tr>
                                        <tr>
                                            <td>#2147</td>
                                            <td>Bridie Kessler</td>
                                            <td>2023-07-05</td>
                                            <td class="fw-bold">50</td>
                                            <td>$300</td>
                                            <td>$450</td>
                                            <td>$150</td>
                                        </tr>
                                        <tr>
                                            <td>#2049</td>
                                            <td>Ashleigh Langosh</td>
                                            <td>2023-07-10</td>
                                            <td class="fw-bold">200</td>
                                            <td>$1000</td>
                                            <td>$1500</td>
                                            <td>$500</td>
                                        </tr>
                                        <tr>
                                            <td>#2644</td>
                                            <td>Angus Grady</td>
                                            <td>2023-07-15</td>
                                            <td class="fw-bold">75</td>
                                            <td>$400</td>
                                            <td>$600</td>
                                            <td>$200</td>
                                        </tr>
                                        <tr>
                                            <td>#2644</td>
                                            <td>Raheem Lehner</td>
                                            <td>2023-07-20</td>
                                            <td class="fw-bold">150</td>
                                            <td>$800</td>
                                            <td>$1200</td>
                                            <td>$400</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>
                    <!-- End Best Leads -->

                </div>
            </div><!-- End Left side columns -->

            <!-- Right side columns -->
            <div class="col-lg-4">

                <!-- Recent Activity -->
                <div class="card">
                    <div class="filter">
                        <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li class="dropdown-header text-start">
                                <h6>Filter</h6>
                            </li>
                            <li><a class="dropdown-item" href="#">Today</a></li>
                            <li><a class="dropdown-item" href="#">This Month</a></li>
                            <li><a class="dropdown-item" href="#">This Year</a></li>
                        </ul>
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">Recent Activity <span>| Today</span></h5>

                        <div class="activity">

                            <div class="activity-item d-flex">
                                <div class="activite-label">32 min</div>
                                <i class='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                <div class="activity-content">
                                    New lead received from John Doe
                                    <span class="lead-status"> - New Lead</span>
                                </div>
                            </div><!-- End activity item-->

                            <div class="activity-item d-flex">
                                <div class="activite-label">56 min</div>
                                <i class='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                                <div class="activity-content">
                                    Updated lead details for Jane Smith
                                    <span class="lead-status"> - Lead Updated</span>
                                </div>
                            </div><!-- End activity item-->

                            <div class="activity-item d-flex">
                                <div class="activite-label">2 hrs</div>
                                <i class='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                                <div class="activity-content">
                                    New lead received from Mark Johnson
                                    <span class="lead-status"> - New Lead</span>
                                </div>
                            </div><!-- End activity item-->

                            <div class="activity-item d-flex">
                                <div class="activite-label">1 day</div>
                                <i class='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                                <div class="activity-content">
                                    Updated lead details for Emily Brown
                                    <span class="lead-status"> - Lead Updated</span>
                                </div>
                            </div><!-- End activity item-->

                            <div class="activity-item d-flex">
                                <div class="activite-label">2 days</div>
                                <i class='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                                <div class="activity-content">
                                    New lead received from Michael Davis
                                    <span class="lead-status"> - New Lead</span>
                                </div>
                            </div><!-- End activity item-->

                            <div class="activity-item d-flex">
                                <div class="activite-label">4 weeks</div>
                                <i class='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                                <div class="activity-content">
                                    Updated lead details for Sarah Wilson
                                    <span class="lead-status"> - Lead Updated</span>
                                </div>
                            </div><!-- End activity item-->

                        </div>

                    </div>
                </div><!-- End Recent Activity -->

                <!-- Website Traffic -->
                <div class="card">
                    <div class="filter">
                        <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li class="dropdown-header text-start">
                                <h6>Filter</h6>
                            </li>
                            <li><a class="dropdown-item" href="#">Today</a></li>
                            <li><a class="dropdown-item" href="#">This Month</a></li>
                            <li><a class="dropdown-item" href="#">This Year</a></li>
                        </ul>
                    </div>

                    <div class="card-body pb-0">
                        <h5 class="card-title">Website Traffic <span>| Today</span></h5>

                        <div ref="chart2" style="min-height: 375px;" class="echart"></div>
                        
                        
                    </div>
                </div><!-- End Website Traffic -->

                <!-- Budget Report -->
                <div class="card">
                    <div class="filter">
                        <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li class="dropdown-header text-start">
                                <h6>Filter</h6>
                            </li>

                            <li><a class="dropdown-item" href="#">Today</a></li>
                            <li><a class="dropdown-item" href="#">This Month</a></li>
                            <li><a class="dropdown-item" href="#">This Year</a></li>
                        </ul>
                    </div>

                    <div class="card-body pb-0">
                        <h5 class="card-title">Budget Report <span>| This Month</span></h5>

                        <div id="budgetChart" style="min-height: 400px;" class="echart"></div>

                        
                    </div>
                </div><!-- End Budget Report -->

                <!-- Event Management Chat Bot -->
                <div class="card chat-bot">
                    <div class="card-body">
                        <h5 class="card-title">Event Management Chat Bot</h5>
                        <!-- Add your event management dashboard elements here -->
                        <div class="chat-container">
                            <div id="chatBotMessages" class="chat-messages"></div>
                            <div class="input-container">
                                <input type="text" class="form-control chat-input" id="userInput"
                                    placeholder="Type your message">
                                <button type="button" class="btn btn-primary chat-send"
                                    onclick="sendMessage()">Send</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>

</main><!-- End Main -->`,

data() {
    return {
      chartOptions: {
        series: [
          {
            name: 'Leads',
            data: [31, 40, 28, 51, 42, 82, 56],
          },
          {
            name: 'Contacted',
            data: [22, 33, 15, 28, 40, 32, 26],
          },
          {
            name: 'Confirmed',
            data: [12, 22, 16, 12, 18, 24, 20],
          },
          {
            name: 'Revenue',
            data: [10000, 12000, 8000, 9000, 15000, 11000, 13000],
          },
        ],
        chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: false,
          },
        },
        markers: {
          size: 4,
        },
        colors: ['#4154f1', '#2eca6a', '#ff771d', '#ff2e63'],
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.3,
            opacityTo: 0.4,
            stops: [0, 90, 100],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
          width: 2,
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z',
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      },
    };
  },
  mounted() {
    this.renderChart();
    this.renderChart2();
    document.title = "Home";
  },
  methods: {
    renderChart() {
      // Wait for the DOM to ensure the element is available
      
        new ApexCharts(this.$refs.chart, {
          ...this.chartOptions,
        }).render();
      
    },

    renderChart2() {
        
          const chart2 = echarts.init(this.$refs.chart2);
          chart2.setOption({
            tooltip: {
              trigger: 'item',
            },
            legend: {
              top: '5%',
              left: 'center',
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                  show: false,
                  position: 'center',
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: '18',
                    fontWeight: 'bold',
                  },
                },
                labelLine: {
                  show: false,
                },
                data: [
                  { value: 50, name: 'Call' },
                  { value: 15, name: 'Email' },
                  { value: 75, name: 'Social Media' },
                  { value: 35, name: 'WhatsApp' },
                  { value: 10, name: 'Referral' },
                  { value: 5, name: 'Google Ad' },
                ],
              },
            ],
          });
        
      },


  },





   
});

export default ManagerHome;