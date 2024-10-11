"use client";

const Rumus = () => {
  return (
    <div className="p-6 my-4 bg-white dark:bg-gray-700 shadow rounded-lg space-y-1">
      <p>
        <strong>1. Rumus untuk Waktu Tunggu (Waiting Time - WT):</strong>
      </p>
      <p className="font-serif items-center">WT=Start Time−Arrival Time</p>
      <ul className="list-disc pl-4">
        <li>
          Start Time adalah waktu ketika proses mulai dieksekusi oleh CPU.
        </li>
        <li>
          Arrival Time (AT) adalah waktu ketika proses tiba dalam sistem dan
          siap untuk dieksekusi.
        </li>
      </ul>
      <p>
        <strong>
          2. Rumus untuk Waktu Penyelesaian (Turnaround Time - TAT):
        </strong>
      </p>
      <p className="font-serif items-center">
        TAT=Completion Time−Arrival Time
      </p>
      <ul className="list-disc pl-4">
        <li>
          Start Time adalah waktu ketika proses mulai dieksekusi oleh CPU.
        </li>
        <li>
          Arrival Time (AT) adalah waktu ketika proses tiba dalam sistem dan
          siap untuk dieksekusi.
        </li>
      </ul>
      <p>
        <strong>3. Perhitungan Rata-rata:</strong>
      </p>
      <p className="font-serif items-center">
        Rata-rata WT= Total Waiting Time / Jumlah Proses
      </p>
      <p className="font-serif items-center">
        Rata-rata TAT = Total Turnaround Time / Jumlah Proses
      </p>
      <ul className="list-disc pl-4">
        <li>
          Start Time adalah waktu ketika proses mulai dieksekusi oleh CPU.
        </li>
        <li>
          Arrival Time (AT) adalah waktu ketika proses tiba dalam sistem dan
          siap untuk dieksekusi.
        </li>
      </ul>
      <div>
        <h2>Penerapan dalam FCFS dan SJF:</h2>
        <p>
          <strong>First Come First Serve (FCFS):</strong>
        </p>
        <ul className="list-disc pl-4">
          <li>
            Urutan Eksekusi: Berdasarkan urutan kedatangan (Arrival Time).
          </li>
          <li>
            Proses pertama yang tiba akan dieksekusi lebih dulu, dan waktu mulai
            eksekusi bergantung pada kapan CPU selesai dengan proses sebelumnya.
          </li>
        </ul>
        <p>
          Waiting Time (WT) dihitung dengan mengurangi Arrival Time dari waktu
          proses mulai dijalankan.
        </p>
        <p>
          Turnaround Time (TAT) dihitung dengan mengurangi Arrival Time dari
          waktu proses selesai dijalankan.
        </p>
        <p>Shortest Job First (SJF):</p>
        <ul className="list-disc pl-4">
          <li>
            Urutan Eksekusi: Berdasarkan waktu eksekusi (Burst Time). Proses
            dengan burst time terpendek akan dieksekusi lebih dulu.
          </li>
          <li>
            Pada varian Non-Preemptive SJF, setelah proses mulai dijalankan,
            proses tersebut akan diselesaikan sepenuhnya sebelum CPU beralih ke
            proses lain.
          </li>
          <li>
            Pada varian Preemptive SJF (Shortest Remaining Time First - SRTF),
            proses baru dengan burst time lebih pendek dapat menginterupsi
            proses yang sedang berjalan.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rumus;
