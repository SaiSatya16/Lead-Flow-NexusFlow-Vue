const Sidebar = Vue.component("sidebar", {
    template:  `
    <div>

    <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

        <li class="nav-item">
            <a v-if="['Admin', 'Manager'].includes(role)" class="nav-link " href="/">
                <i class="bi bi-grid"></i>
                <router-link to="/">Dashboard</router-link>
            </a>
        </li>

        <li class="nav-item">
            <a v-if="['Admin', 'Manager'].includes(role)"  class="nav-link collapsed" data-bs-target="#management-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-journal-text"></i><span>Management</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="management-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    
                        
                 <router-link to="/inquiry"><i class="bi bi-circle"></i>Inquiries</router-link>
                    
                </li>
                <li>
                <router-link to="/proposals"><i class="bi bi-circle"></i>Proposals</router-link>
                </li>
                <li>

                <router-link to="/events"><i class="bi bi-circle"></i>Events</router-link>
                </li>
            </ul>
        </li>

        <li class="nav-item">
            <a v-if="['Admin', 'Manager'].includes(role)" class="nav-link collapsed" data-bs-target="#operations-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-people"></i><span>Operations</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="operations-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                <router-link to="/menu_management"><i class="bi bi-circle"></i>Menu Management</router-link>
                </li>
                <li>
                <router-link to="/payment_invoice"><i class="bi bi-circle"></i>Payments & Invoicing</router-link>
                </li>
            </ul>
        </li>
        <li class="nav-item">
            <a v-if="['Admin', 'Manager'].includes(role)" class="nav-link collapsed" data-bs-target="#planning-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-calendar-event"></i><span>Planning</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="planning-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                <router-link to="/calendar"><i class="bi bi-circle"></i>Calendar</router-link>
                </li>
                <li>
                <router-link to="/communication"><i class="bi bi-circle"></i>Communication</router-link>
                </li>
                <li>
                <router-link to="/tasks_reminders"><i class="bi bi-circle"></i>Tasks & Reminders</router-link>
                </li>
                <li>
                <router-link to="/archive"><i class="bi bi-circle"></i>Archive</router-link>
                </li>
            </ul>
        </li>

        <li class="nav-item">
            <a v-if="['Admin', 'Manager'].includes(role)" class="nav-link collapsed" data-bs-target="#settings-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-gear"></i><span>Settings</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="settings-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <router-link to="/general_settings"><i class="bi bi-circle"></i>General Settings</router-link>
                </li>
                <li>
                    <router-link to="/user_management"><i class="bi bi-circle"></i>User Management</router-link>
                </li>
            </ul>
        </li><!-- End Settings Nav -->

        <li class="nav-item">
            <router-link to="/pages-contact" class="nav-link collapsed">
                <i class="bi bi-question-circle"></i>
                <span>Help?</span>
            </router-link>
        </li><!-- End Help Nav -->

    </ul>

</aside>
    
    </div>`,

    data() {
        return {
          role: localStorage.getItem('role'),
          is_login: localStorage.getItem('auth-token'),
          id : localStorage.getItem('id'),
          inactivityTimeout: 5 * 60 * 1000, // 30 minutes in milliseconds
          inactivityTimer: null,
        };
      },
      methods: {
        logout() {
          localStorage.removeItem('auth-token');
          localStorage.removeItem('role');
          localStorage.removeItem('id');
          localStorage.removeItem('username');
          this.$router.push({ path: '/login' });
        },
        handleUserActivity() {
          // Update the last activity timestamp
          localStorage.setItem('lastActivityTimestamp', Date.now().toString());
        },
        checkInactivity() {
          const lastActivityTimestamp = localStorage.getItem('lastActivityTimestamp');
          const currentTime = Date.now();
    
          if (lastActivityTimestamp && currentTime - lastActivityTimestamp > this.inactivityTimeout) {
            // User has been inactive for too long, clear local storage
            this.clearLocalStorage();
          }
        },
        clearLocalStorage() {
          localStorage.removeItem('auth-token');
          localStorage.removeItem('role');
          this.$router.push({ path: '/login' });
        },
        startInactivityTimer() {
          this.inactivityTimer = setInterval(() => {
            this.checkInactivity();
          }, 60000); // Check every minute (adjust as needed)
        },
        stopInactivityTimer() {
          clearInterval(this.inactivityTimer);
        },
      },
      mounted() {
        // Set up event listeners to track user activity
        document.addEventListener('mousemove', this.handleUserActivity);
        document.addEventListener('keydown', this.handleUserActivity);
        document.title = "Navbar";
    
        // Start the inactivity timer
        this.startInactivityTimer();
      },
      beforeDestroy() {
        // Clean up event listeners and the inactivity timer
        document.removeEventListener('mousemove', this.handleUserActivity);
        document.removeEventListener('keydown', this.handleUserActivity);
        this.stopInactivityTimer();
      },



  
  });
  
  export default Sidebar;