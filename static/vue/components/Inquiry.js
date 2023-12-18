const Inquiry =Vue.component('inquiry', {
    template: `<div>  <main id="main" class="main">

    <div class="pagetitle">
        <h1>Inquiries</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item">Management</li>
                <li class="breadcrumb-item active">Inquiries</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Inquiries</h5>

                        <!-- Button to add Inquiry -->
                        <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal"
                            data-bs-target="#verticalycentered">
                            <i class="bi bi-emoji-smile me-1"></i> Add Inquiry
                        </button>

                        

                        <!-- Data Table -->
                        <div class="table-responsive">
                            <table class="table datatable">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Lead Name</th>
                                        <th scope="col">Number of Pax</th>
                                        <th scope="col">Sources</th>
                                        <th scope="col">D.O.E</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Sample data rows -->
                                    <tr v-for="lead in leads"   >
                                        <th scope="row">{{lead.id}}</th>
                                        <td> {{lead.id}} </td>
                                        <td>{{lead.id}}</td>
                                        <td>{{lead.id}}</td>
                                        <td>{{lead.id}}</td>
                                        <td>
                                            
                                            <!-- Edit Status Modal 
                                            <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#editModalinquiry.id">
                                                <i class="bi bi-pencil-square"></i>
                                            </button> -->
                                            
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-sm btn-primary dropdown-toggle" type="button"
                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    <i class="bi bi-telephone"></i>
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="mailto:inquiry.email">Email:
                                                        inquiry.email</a>
                                                    <a class="dropdown-item" href="tel:inquiry.contact_no">Contact Number:
                                                        inquiry.contact_no</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            delete                                                                                                                           
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- End Data Table -->

                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

<div class="modal fade" id="verticalycentered" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Lead Capture Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="form-floating">
                        <input v-model="Name" type="text" class="form-control" id="floatingName"
                            placeholder="Lead Name" name="floatingName">
                        <label for="floatingName">Lead Name</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating">
                        <select v-model="Sources" class="form-select" id="floatingSources"
                            aria-label="Sources" name="floatingSources">
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
                        <input v-model="Date" type="date" class="form-control" id="floatingEventDate"
                            placeholder="Date of the Event" name="floatingEventDate">
                        <label for="floatingEventDate">Date of the Event</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating">
                        <input v-model="Pax" type="number" class="form-control" id="floatingPax"
                            placeholder="No. of Pax" name="floatingPax">
                        <label for="floatingPax">No. of Pax</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating">
                        <textarea v-model="FoodType" class="form-control" id="floatingFoodType"
                            placeholder="Exact Food Type Required" rows="4" name="floatingFoodType"></textarea>
                        <label for="floatingFoodType">Exact Food Type Required</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating">
                        <input v-model="Email" type="email" class="form-control" id="floatingEmail"
                            placeholder="Email address" name="floatingEmail">
                        <label for="floatingEmail">Email address</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating">
                        <input v-model="ContactNumber" type="tel" class="form-control"
                            id="floatingContactNumber" placeholder="Contact_number"
                            value="+971" name="Contact_number">
                        <label for="floatingContactNumber">Contact number</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating">
                        <div>Status:</div>
                        <div class="form-check form-check-inline">
                            <input v-model="status" class="form-check-input" type="radio" name="status"
                                id="statusInProgress" value="In progress">
                            <label class="form-check-label" for="statusInProgress">In
                                progress</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input v-model="status" class="form-check-input" type="radio" name="status"
                                id="statusConfirmed" value="Confirmed">
                            <label class="form-check-label"
                                for="statusConfirmed">Confirmed</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input v-model="status" class="form-check-input" type="radio" name="status"
                                id="statusLost" value="Lost">
                            <label class="form-check-label"
                                for="statusLost">Lost</label>
                        </div>
                    </div>
                </div>
                <div class="col-12 text-center">
                    <button type="button" @click="addlead" class="btn btn-primary">Submit</button>
                    <!-- <button type="reset" class="btn btn-secondary">Reset</button> -->
                </div>
            </div>
        </div>
    </div>
</div>
</div>

</div>
`,

    data: function(){
        return {
            leads : [],
            Name: null,
            Sources: null,
            Date: null,
            Pax: null,
            FoodType: null,
            Email: null,
            ContactNumber: null,
            status: null,
        }
    },

    methods: {

        async getleads(){
            const res = await fetch("/api/getleads");
            if(res.ok){
                const data = await res.json();
                console.log(data);
                this.leads = data;
            }
            else{
                const data = await res.json();
                console.log(data);
                alert("Error!");
            }
        },



        async addlead(){
            const res = await fetch("/api/addlead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Name: this.Name,
                    Sources: this.Sources,
                    Date: this.Date,
                    Pax: this.Pax,
                    FoodType: this.FoodType,
                    Email: this.Email,
                    ContactNumber: this.ContactNumber,
                    status: this.status,
                }),
            });
            if(res.ok){
                const data = await res.json();
                console.log(data);
                alert("Lead Added!");
                this.getleads();
            }
            else{
                const data = await res.json();
                console.log(data);
                alert("Error!");
            }
        }
    },



    mounted : function(){
        document.title = "Inquiry";
        this.getleads();
    }
});

export default Inquiry;