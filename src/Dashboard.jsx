import { useState } from "react";
import { Power, Sun, BarChart2 } from "lucide-react";

export default function Dashboard() {
  const [devices, setDevices] = useState([
    { id: "shelly1", name: "Pompe Piscine", power: 450, status: true },
    { id: "shelly2", name: "Ballon Eau Chaude", power: 1100, status: false },
  ]);

  const toggleDevice = (id) => {
    setDevices((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status: !d.status } : d))
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: 28 }}>Solanov Supervision</h1>
      {devices.map((device) => (
        <div key={device.id} style={{
            border: "1px solid #ccc",
            padding: 12,
            marginTop: 10,
            borderRadius: 8,
            background: "#fff"
          }}>
          <h2><Power size={18} /> {device.name}</h2>
          <p>Consommation : {device.power} W</p>
          <button onClick={() => toggleDevice(device.id)}>
            {device.status ? "Éteindre" : "Allumer"}
          </button>
        </div>
      ))}
      <div style={{ marginTop: 30 }}>
        <h2><BarChart2 size={18} /> Production solaire : <strong>+7.3 kWh</strong> aujourd'hui</h2>
      </div>
    </div>
  );
}
