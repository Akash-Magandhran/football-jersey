 const modal = document.getElementById('modalOverlay');
        const openBtn = document.getElementById('openAuth');
        const closeBtn = document.getElementById('closeBtn');
        const loginSection = document.getElementById('loginForm');
        const signupSection = document.getElementById('signupForm');

        // Modal Open/Close
        openBtn.onclick = () => modal.style.display = 'flex';
        closeBtn.onclick = () => modal.style.display = 'none';
        window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; }

        // Switch between Login and Signup
        function toggleAuth() {
            if (loginSection.style.display === "none") {
                loginSection.style.display = "block";
                signupSection.style.display = "none";
            } else {
                loginSection.style.display = "none";
                signupSection.style.display = "block";
            }
        }

        // SIGN UP - LocalStorage
        function handleSignup() {
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const pass = document.getElementById('regPass').value;

            if (name && email && pass) {
                const user = { name, email, pass };
                localStorage.setItem(email, JSON.stringify(user));
                alert("Account will updated");
                toggleAuth();
            } else {
                alert("No user Data!");
            }
        }

        // LOGIN - LocalStorage-la check panna
        function handleLogin() {
            const email = document.getElementById('logEmail').value;
            const pass = document.getElementById('logPass').value;

            const storedUser = localStorage.getItem(email);

            if (storedUser) {
                const userData = JSON.parse(storedUser);
                if (userData.pass === pass) {
                    alert("Welcome " + userData.name + "! Login Success.");
                    modal.style.display = 'none';

                } else {
                    alert(" verify tha Password !");
                }
            } else {
                alert("No user account create account!");
            }
        }