const Nomor5 = () => {
  return (
    <div
      id="question-5"
      className="p-4 my-4 bg-white dark:bg-gray-700 shadow rounded-lg"
    >
      <h2 className="text-lg font-semibold mb-2">5. Process State</h2>
      <p>
        <strong>Process State</strong>: Menyimpan status informasi penting pada
        CPU
      </p>
      <p>
        <strong>Process ID</strong>: Informasi untuk membedakan proses pada CPU
        agar bisa menyimpan dan mengelola datanya dengan benar
      </p>
      <p>
        <strong>Register CPU</strong>: Bagian untuk menyimpan data pada sistem
        CPU agar bisa melanjutkan dari proses terakhir
      </p>
      <p>
        <strong>I/O Status Information</strong>: Untuk mengelola akses I/O dan
        menghindari konflik antar informasi
      </p>
      <p>
        <strong>Accounting Information</strong>: Mencatat informasi yang
        berhubungan dengan penggunaan CPU
      </p>
      <p>
        <strong>Priority</strong>: Menunjukkan prioritas proses
      </p>
      <p>
        <strong>List of Open Files</strong>: Menyimpan informasi tentang file
        yang dibuka oleh proses
      </p>
    </div>
  );
};
export default Nomor5;
