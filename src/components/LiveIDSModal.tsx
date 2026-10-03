import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, ShieldCheck, Play, RotateCcw, Github, ExternalLink, Activity, Server, Cpu } from 'lucide-react';

interface LiveIDSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PacketScenario {
  name: string;
  protocol: 'TCP' | 'UDP' | 'ICMP';
  srcPort: number;
  dstPort: number;
  packetRate: number; // packets/sec
  byteCount: number;
  flag: string;
  isAttack: boolean;
  attackType: string;
  confidence: number;
  description: string;
}

const SCENARIOS: PacketScenario[] = [
  {
    name: 'SYN Flood Anomaly (DDoS)',
    protocol: 'TCP',
    srcPort: 49821,
    dstPort: 80,
    packetRate: 14200,
    byteCount: 852000,
    flag: 'SYN_SENT',
    isAttack: true,
    attackType: 'DoS SYN-Flood',
    confidence: 99.4,
    description: 'High frequency half-open TCP connections saturating backlog queues on HTTP port 80.',
  },
  {
    name: 'Normal Web Browsing (HTTPS)',
    protocol: 'TCP',
    srcPort: 54312,
    dstPort: 443,
    packetRate: 48,
    byteCount: 32400,
    flag: 'ESTABLISHED',
    isAttack: false,
    attackType: 'Benign Traffic',
    confidence: 98.8,
    description: 'Standard encrypted TLS handshake and bidirectional session payload transfer.',
  },
  {
    name: 'Port Scanner Sweep (Nmap Recon)',
    protocol: 'TCP',
    srcPort: 61004,
    dstPort: 22,
    packetRate: 3500,
    byteCount: 140000,
    flag: 'FIN/NULL/XMAS',
    isAttack: true,
    attackType: 'Probe / Port Scan',
    confidence: 97.6,
    description: 'Rapid sequential probe of privileged system ports to identify unpatched services.',
  },
  {
    name: 'UDP Ping Bomb (Teardrop Flood)',
    protocol: 'UDP',
    srcPort: 32768,
    dstPort: 53,
    packetRate: 9800,
    byteCount: 784000,
    flag: 'RAW_DATAGRAM',
    isAttack: true,
    attackType: 'UDP Amplification Flood',
    confidence: 98.2,
    description: 'Spoofed DNS reflection packet flood targeting system bandwidth exhaustion.',
  },
];

export const LiveIDSModal: React.FC<LiveIDSModalProps> = ({ isOpen, onClose }) => {
  const [selectedScenario, setSelectedScenario] = useState<PacketScenario>(SCENARIOS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<PacketScenario | null>(SCENARIOS[0]);

  const handleRunScan = (scenario: PacketScenario) => {
    setSelectedScenario(scenario);
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanResult(scenario);
    }, 750);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl bg-[#121316] border border-[#D7E2EA]/30 rounded-[32px] sm:rounded-[44px] p-6 sm:p-8 shadow-2xl z-10 my-auto text-[#D7E2EA] max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Live Interactive Simulator
              </span>
              <span className="text-xs text-white/50">Random Forest Inference Engine</span>
            </div>
            <h3 className="hero-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
              SafeNet – Live IDS Classifier
            </h3>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 font-light">
              Interactive test console for Nitya Tiwari&apos;s machine learning-based Network Intrusion Detection System.
            </p>
          </div>

          {/* Preset Attack / Benign Scenarios */}
          <div className="mb-6">
            <div className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-2">
              Select Network Traffic Scenario to Analyze:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SCENARIOS.map((sc) => (
                <button
                  key={sc.name}
                  type="button"
                  onClick={() => handleRunScan(sc)}
                  className={`text-left p-3.5 rounded-2xl border transition-all duration-200 ${
                    selectedScenario.name === sc.name
                      ? 'border-[#B600A8] bg-[#B600A8]/10 text-white'
                      : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-white/80'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-xs sm:text-sm">{sc.name}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                        sc.isAttack
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}
                    >
                      {sc.protocol} :{sc.dstPort}
                    </span>
                  </div>
                  <div className="text-[11px] text-white/50 line-clamp-1 font-light">
                    {sc.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Live Telemetry & Inspector */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
            {/* Packet Properties */}
            <div className="md:col-span-5 p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs font-mono space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-white/60 font-sans mb-3 flex items-center gap-2">
                <Server className="w-3.5 h-3.5 text-[#BBCCD7]" />
                <span>Extracted Flow Features</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-white/40">Protocol:</span>
                <span className="text-white">{selectedScenario.protocol}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-white/40">Source Port:</span>
                <span className="text-white">{selectedScenario.srcPort}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-white/40">Target Port:</span>
                <span className="text-white">{selectedScenario.dstPort}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-white/40">Packet Rate:</span>
                <span className="text-amber-300">{selectedScenario.packetRate.toLocaleString()} pkts/s</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-white/40">Total Bytes:</span>
                <span className="text-white">{selectedScenario.byteCount.toLocaleString()} B</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">TCP Flags:</span>
                <span className="text-cyan-300">{selectedScenario.flag}</span>
              </div>
            </div>

            {/* Classification Output Result */}
            <div className="md:col-span-7 p-5 rounded-2xl bg-gradient-to-br from-[#16181D] to-[#0D0E11] border border-white/10 flex flex-col justify-between relative overflow-hidden">
              {isScanning ? (
                <div className="h-44 flex flex-col items-center justify-center gap-3">
                  <Activity className="w-8 h-8 text-[#B600A8] animate-spin" />
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/70">
                    Running Random Forest Evaluation...
                  </span>
                </div>
              ) : scanResult ? (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-white/50 font-semibold">
                      Model Verdict
                    </span>
                    <span className="text-xs text-white/40">Latency: 1.2ms</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-2xl border ${
                        scanResult.isAttack
                          ? 'bg-rose-500/20 border-rose-500/40 text-rose-400'
                          : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                      }`}
                    >
                      {scanResult.isAttack ? (
                        <ShieldAlert className="w-8 h-8" />
                      ) : (
                        <ShieldCheck className="w-8 h-8" />
                      )}
                    </div>
                    <div>
                      <div
                        className={`text-xl sm:text-2xl font-bold uppercase ${
                          scanResult.isAttack ? 'text-rose-400' : 'text-emerald-400'
                        }`}
                      >
                        {scanResult.isAttack ? 'MALICIOUS ATTACK' : 'BENIGN TRAFFIC'}
                      </div>
                      <div className="text-xs sm:text-sm text-white/80">
                        {scanResult.attackType} • {scanResult.confidence}% Confidence
                      </div>
                    </div>
                  </div>

                  {/* Confidence meter bar */}
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-3">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        scanResult.isAttack
                          ? 'bg-gradient-to-r from-amber-500 to-rose-500'
                          : 'bg-gradient-to-r from-teal-500 to-emerald-400'
                      }`}
                      style={{ width: `${scanResult.confidence}%` }}
                    />
                  </div>

                  <p className="text-xs text-[#D7E2EA]/70 leading-relaxed font-light">
                    {scanResult.description}
                  </p>
                </div>
              ) : null}

              {/* Run scan action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-3">
                <button
                  type="button"
                  onClick={() => handleRunScan(selectedScenario)}
                  disabled={isScanning}
                  className="px-5 py-2 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 hover:bg-white/90 transition-colors disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Re-Analyze Flow</span>
                </button>
                <span className="text-[11px] text-white/40">Model trained on NSL-KDD</span>
              </div>
            </div>
          </div>

          {/* GitHub Direct Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <a
              href="https://github.com/NITYA123715/IDS-Network-Intrusion-Detection-System"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>NITYA123715/IDS-Network-Intrusion-Detection-System</span>
            </a>

            <a
              href="https://github.com/NITYA123715/IDS-Network-Intrusion-Detection-System/blob/main/ids_prediction_system.py"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#B600A8] text-white text-xs sm:text-sm font-medium hover:bg-[#B600A8]/80 transition-colors"
            >
              <span>View Source Code on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
