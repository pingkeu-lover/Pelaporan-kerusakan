document.getElementById('reportForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const lokasi = document.getElementById('lokasi').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const resultDiv = document.getElementById('result');

    resultDiv.style.color = "blue";
    resultDiv.innerText = "Mengirim laporan...";

    // URL API Gateway akan diisi nanti setelah API Gateway dibuat di Bagian 2
    const apiURL = "URL_API_GATEWAY_ANDA_DISINI"; 

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nama, lokasi, deskripsi })
        });

        const data = await response.json();
        if (response.ok) {
            resultDiv.style.color = "green";
            resultDiv.innerText = `Laporan berhasil dikirim! Nomor Tiket Anda: ${data.ticket_id || data.message}`;
        } else {
            resultDiv.style.color = "red";
            resultDiv.innerText = "Gagal mengirim laporan.";
        }
    } catch (error) {
        resultDiv.style.color = "red";
        resultDiv.innerText = "Terjadi kesalahan koneksi ke server.";
    }
});