const Nomor8 = () => {
  return (
    <div
      id="question-8"
      className="p-6 my-4 bg-white dark:bg-gray-700 shadow rounded-lg space-y-1"
    >
      <h2 className="text-lg font-semibold mb-2">
        8. Penjelasan SJF (Shortest Job First)
      </h2>
      <p>
        SJF adalah algoritma penjadwalan yang mengutamakan proses yang memiliki
        waktu eksekusi atau burst time paling pendek. Algoritma ini berusaha
        meminimalkan waktu tunggu rata-rata dengan menyelesaikan proses-proses
        yang lebih cepat lebih dulu.
      </p>
      <p>
        <strong>Cara kerja: </strong>
      </p>
      <ul className="list-disc pl-4">
        <li>
          Setiap kali CPU bebas, ia akan memilih proses yang memiliki waktu
          eksekusi tersingkat dari daftar proses yang tersedia.
        </li>
        <li>
          Jika dua proses memiliki waktu eksekusi yang sama, pemilihan bisa
          dilakukan berdasarkan urutan kedatangan atau kebijakan lain.
        </li>
      </ul>
      <p>
        <strong>Variasi SJF: </strong>
      </p>
      <ul className="list-disc pl-4">
        <li>
          <strong>Non-preemptive SJF: </strong>
          Setelah CPU mulai mengeksekusi sebuah proses, proses tersebut harus
          diselesaikan sebelum CPU bisa pindah ke proses lain.
        </li>
        <li>
          <strong>
            Preemptive SJF (Shortest Remaining Time First - SRTF):
          </strong>{" "}
          Jika sebuah proses baru datang dengan waktu eksekusi yang lebih pendek
          daripada proses yang sedang dieksekusi, CPU akan menghentikan proses
          saat ini dan beralih ke proses baru yang lebih pendek.
        </li>
      </ul>
      <p>
        <strong>Kelebihan +: </strong>
      </p>
      <ul className="list-disc pl-4">
        <li>
          Optimal dalam hal waktu tunggu: SJF menghasilkan waktu tunggu
          rata-rata paling rendah dibanding algoritma penjadwalan lain.
        </li>
        <li>
          Efisiensi tinggi: Proses-proses kecil selesai lebih cepat, memberikan
          respons lebih baik pada sistem.
        </li>
      </ul>
      <p>
        <strong>Kekurangan -: </strong>
      </p>
      <ul className="list-disc pl-4">
        <li>
          Memerlukan prediksi waktu eksekusi: Algoritma ini memerlukan informasi
          tentang waktu eksekusi proses, yang sulit diprediksi dalam banyak
          kasus.
        </li>
        <li>
          Starvation: Proses besar bisa tertunda lama jika selalu ada proses
          kecil yang datang, menyebabkan starvation atau kelaparan proses.
        </li>
      </ul>
      <p>
        <strong>Konklusi: </strong>
      </p>
      <ul className="list-disc pl-4">
        <li>
          Optimal untuk waktu tunggu rata-rata: SJF dikenal sebagai algoritma
          yang paling efisien dalam mengurangi waktu tunggu.
        </li>
        <li>
          Memiliki versi preemptive dan non-preemptive: Pada versi preemptive,
          proses yang lebih pendek dapat menginterupsi proses yang lebih
          panjang.
        </li>
        <li>
          Rentan terhadap starvation: Proses besar mungkin tidak pernah
          dijalankan jika terus-menerus kalah dengan proses kecil.
        </li>
      </ul>
    </div>
  );
};
export default Nomor8;
