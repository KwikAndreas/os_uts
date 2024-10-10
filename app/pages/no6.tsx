const Nomor6 = () => {
  return (
    <div
      id="question-6"
      className="p-4 my-4 bg-white dark:bg-gray-700 shadow rounded-lg"
    >
      <h2 className="text-lg font-semibold mb-2">6. Semaphore</h2>
      <p>
        <strong>Semaphore</strong>: Kunci yang ada pada proses untuk mengatur
        akses sumber daya bersama agar tidak digunakan secara bersamaan
      </p>
      <p>
        <strong>Dua tipe Semaphore:</strong>
      </p>
      <ul className="list-disc pl-4">
        <li>
          <strong>Semaphore Biner</strong>: Memiliki nilai 1 dan 0
        </li>
        <li>
          <strong>Semaphore Perhitungan</strong>: Memiliki nilai lebih dari 1
        </li>
      </ul>
      <p>
        <strong>Contoh penggunaan:</strong> Mengakses printer
      </p>
    </div>
  );
};
export default Nomor6;
