    document.addEventListener("DOMContentLoaded", () => {
        // Login Form Handling
        const loginForm = document.getElementById("loginForm");
        if (loginForm) {
            loginForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const email = document.getElementById("loginEmail").value;
                const password = document.getElementById("loginPassword").value;
    
                if (email === "user@example.com" && password === "password") {
                    document.getElementById("loginMessage").innerHTML = "✅ Login Successful!";
                    setTimeout(() => {
                        window.location.href = "notification.html"; // Redirect to notifications
                    }, 1500);
                } else {
                    document.getElementById("loginMessage").innerHTML = "❌ Invalid Credentials!";
                }
            });
        }
    
        // Register Form Handling
        const registerForm = document.getElementById("registerForm");
        if (registerForm) {
            registerForm.addEventListener("submit", (e) => {
                e.preventDefault();
                document.getElementById("registerMessage").innerHTML = "✅ Registration Successful!";
                setTimeout(() => {
                    window.location.href = "index.html"; // Redirect to login
                }, 1500);
            });
        }
    
        // Notification Page Handling
        const notificationList = document.getElementById("notificationList");
        if (notificationList) {
            const notifications = [
                "📢 Welcome to the platform!",
                "✅ Your registration was successful.",
                "🚀 New updates coming soon!"
            ];
            
            notifications.forEach((msg) => {
                const li = document.createElement("li");
                li.textContent = msg;
                notificationList.appendChild(li);
            });
        }

    

    document.getElementById("community-btn").addEventListener("click", function () {
        window.open("https://chat.whatsapp.com/YOUR_COMMUNITY_LINK", "_blank");
    });

    document.getElementById("admin-btn").addEventListener("click", function () {
        window.location.href = "mailto:admin@inpay.com";
    });

    updateBalance();
});
