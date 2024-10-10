const Nomor4 = () => {
  return (
    <div
      id="question-4"
      className="p-6 my-4 bg-white dark:bg-gray-700 shadow rounded-lg"
    >
      <h2 className="text-lg font-semibold mb-2">
        4. Penjelasan PSD (Process State Diagram)
      </h2>
      <ul className="list-disc pl-4">
        <li>
          <strong>New</strong>: Proses baru dibuat
        </li>
        <li>
          <strong>Ready</strong>: Proses siap dieksekusi, menunggu giliran CPU
        </li>
        <li>
          <strong>Running</strong>: Proses dijalankan oleh CPU
        </li>
        <li>
          <strong>Waiting</strong>: Proses sedang menunggu input/output
        </li>
        <li>
          <strong>Terminated</strong>: Proses telah selesai dieksekusi
        </li>
      </ul>
    </div>
  );
};
export default Nomor4;
