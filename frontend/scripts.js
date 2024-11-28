
document.getElementById("attendanceForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData.entries());
    const response = await fetch('/attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
});


function getLocation() {
    const locationStatus = document.getElementById("locationStatus");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                document.getElementById("latitude").value = latitude;
                document.getElementById("longitude").value = longitude;

                locationStatus.innerText = `Location captured: Lat ${latitude}, Long ${longitude}`;
            },
            (error) => {
                locationStatus.innerText = "Error capturing location: " + error.message;
            }
        );
    } else {
        locationStatus.innerText = "Geolocation is not supported by this browser.";
    }
}
