import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDXuU-dC86Klq9UazrroYT9ly_3DTBqcuM",
    authDomain: "patrakar-mahavikas-sangh.firebaseapp.com",
    projectId: "patrakar-mahavikas-sangh",
    storageBucket: "patrakar-mahavikas-sangh.appspot.com",
    messagingSenderId: "606732076487",
    appId: "1:606732076487:web:8391de9fd75b278b8505e2"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

        // Handle form submission
        document.getElementById('dataForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;

            const newDataRef = ref(database,'users');
            set(newDataRef, { 
                 name: name,
                age: age }).then(() => {
                alert('Data submitted successfully! Your unique ID is: ' + newDataRef.key);
            }).catch((error) => {
                alert('Error submitting data: ' + error.message);
            });
        });

             // Fetch data based on unique ID
     
        function fetchData() {
            const uniqueId = document.getElementById('uniqueId').value;
            const userRef = ref(database,'users/' + uniqueId);

            userRef.get().then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    alert('Name: ' + data.name + '\nAge: ' + data.age);
                } else {
                    alert('No data available for this ID.');
                }
            }).catch((error) => {
                alert('Error fetching data: ' + error.message);
            });
        }
    
   