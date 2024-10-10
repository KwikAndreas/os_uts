const Nomor9 = () => {
  return (
    <div
      id="question-9"
      className="p-6 my-4 bg-white dark:bg-gray-700 shadow rounded-lg space-y-1"
    >
      <h2 className="text-lg font-semibold mb-2">
        9. Penjelasan FCFS (First Come First Serve)
      </h2>
      <p>
        FCFS adalah salah satu algoritma penjadwalan CPU yang paling sederhana.
        Pada algoritma ini, proses yang datang lebih dulu akan dieksekusi lebih
        dulu, tanpa memperhatikan waktu eksekusi atau prioritasnya. Dengan kata
        lain, CPU akan melayani setiap proses dalam urutan kedatangannya, mirip
        seperti antrean di kasir supermarket.
      </p>
      <p>
        <strong>Cara kerja: </strong>
      </p>
      <ul className="list-disc pl-4">
        <li>
          Proses ditempatkan dalam sebuah antrian berdasarkan urutan kedatangan.
        </li>
        <li>Proses pertama yang masuk adalah yang pertama dieksekusi.</li>
        <li>
          Setelah satu proses mulai dijalankan, CPU akan terus mengeksekusinya
          sampai selesai, tanpa interupsi.
        </li>
      </ul>
      <p>
        <strong>Kelebihan: </strong>
      </p>
      <ul className="list-disc pl-4">
        <li>
          Sederhana: Implementasi dan pemahaman yang mudah karena tidak
          memerlukan perhitungan kompleks.
        </li>
        <li>
          Adil secara kronologis: Setiap proses dijamin mendapat giliran untuk
          dieksekusi sesuai urutan kedatangan.
        </li>
      </ul>
      <p>
        <strong>Kekurangan: </strong>
      </p>
      <ul className="list-disc pl-4">
        <li>
          Masalah convoy effect: Proses-proses dengan waktu eksekusi singkat
          bisa tertahan karena ada proses yang lama dieksekusi lebih dulu,
          menyebabkan waktu tunggu yang tinggi bagi proses singkat.
        </li>
        <li>
          Waktu tunggu tidak optimal: Rata-rata waktu tunggu bisa sangat tinggi
          jika proses-proses besar datang lebih awal.
        </li>
      </ul>
      <p>
        <strong>Konklusi: </strong>Sederhana, tapi kurang efisien. Tidak
        mempertimbangkan waktu eksekusi, sehingga bisa menimbulkan waktu tunggu
        yang lama.
      </p>
    </div>
  );
};
export default Nomor9;
