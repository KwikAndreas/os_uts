const Nomor3 = () => {
  return (
    <div id="question-3" className="p-6 my-4 bg-white dark:bg-gray-700 shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-2">3. Monolitik dan Microkernel</h2>
      <h3 className="font-semibold">Monolitik</h3>
      <p><strong>Kelebihan:</strong></p>
      <ul className="list-disc pl-4">
        <li>Sederhana dan mudah dikembangkan</li>
        <li>Kinerja baik</li>
        <li>Testing mudah</li>
      </ul>
      <p><strong>Kekurangan:</strong></p>
      <ul className="list-disc pl-4">
        <li>Kurang fleksibel</li>
        <li>Stabilitas terbatas</li>
        <li>Maintenance sulit</li>
      </ul>

      <h3 className="font-semibold mt-4">Microkernel</h3>
      <p><strong>Kelebihan:</strong></p>
      <ul className="list-disc pl-4">
        <li>Modular dan fleksibel</li>
        <li>Lebih stabil</li>
        <li>Pengembangan mudah</li>
      </ul>
      <p><strong>Kekurangan:</strong></p>
      <ul className="list-disc pl-4">
        <li>Kompleksitas tinggi</li>
        <li>Debugging sulit</li>
      </ul>
    </div>
  );
};
export default Nomor3;