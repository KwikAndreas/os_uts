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
          <strong>Preemptive SJF (Shortest Remaining Time First):</strong> Jika
          sebuah proses baru datang dengan waktu eksekusi yang lebih pendek
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
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300 dark:text-black">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Proses(P)</th>
              <th className="border border-gray-300 px-4 py-2">
                Arrival Time(AT)
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Burst Time (BT)
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["P1", "0", "6"],
              ["P2", "1", "7"],
              ["P3", "2", "8"],
              ["P4", "3", "9"],
            ].map((row, index) => (
              <tr key={index} className="bg-white even:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border border-gray-300 px-4 py-2"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        <strong>Perhitungan Waktu Tunggu (Waiting Time - WT): </strong>
      </p>
      <ul className="list-disc pl-4">
        <li>P1: Waktu tunggu = Start time - Arrival time = 0 - 0 = 0</li>
        <li>P2: Waktu tunggu = Start time - Arrival time = 16 - 1 = 15</li>
        <li>P3: Waktu tunggu = Start time - Arrival time = 9 - 2 = 7</li>
        <li>P4: Waktu tunggu = Start time - Arrival time = 6 - 3 = 3</li>
      </ul>
      <p>
        <strong>Perhitungan Waktu Penyelesaian (Turnaround Time - TAT):</strong>
        Rumus TAT = Waktu Penyelesaian - Arrival Time
      </p>
      <ul className="list-disc pl-4">
        <li>P1: TAT = 6 - 0 = 6</li>
        <li>P2: TAT = 24 - 1 = 23</li>
        <li>P3: TAT = 16 - 2 = 14</li>
        <li>P4: TAT = 9 - 3 = 6</li>
        <p>Total Turnaround Time = 6 + 23 + 14 + 6 = 49</p>
      </ul>
      <p>
        <strong>Rata-rata</strong>
      </p>
      <ul className="list-disc pl-4">
        <li>
          Rata-rata Waktu Tunggu = Total waktu tunggu / Jumlah proses = 25 / 4 =
          6,25
        </li>
        <li>
          Rata-rata Turnaround Time = Total TAT / Jumlah proses = 49 / 4 = 12,25
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
      <p>
        <strong>Konklusi Rumus: </strong>
      </p>
      <ul className="list-disc pl-4">
        <li>
          WT(Waiting Time) Shortest Job First & Round Robin = COMPLETION TIME -
          ARRIVAL TIME - BURST TIME
        </li>
        <li>
          WT(Waiting Time) FCFS(First Come First Serve) = START TIME - ARRIVAL
          TIME
        </li>
      </ul>
    </div>
  );
};
export default Nomor8;
