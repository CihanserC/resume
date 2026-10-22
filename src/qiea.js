// A minimal quantum-inspired evolutionary algorithm (QIEA).
// Each gene is a Q-bit with angle θ: |ψ⟩ = cos θ |0⟩ + sin θ |1⟩, so it is
// observed as 1 with probability sin²θ. Observing collapses the Q-bits into
// candidate bit strings; a rotation gate then turns each Q-bit whose observed
// value disagrees with the best string a little towards that string.

const EDGE = 0.06; // Keep a little uncertainty so the search never freezes.
const STEP = 0.03 * Math.PI;

export const createQIEA = (target, random, samples = 4) => {
  let angles = new Array(target.length).fill(Math.PI / 4); // Equal superposition.
  let best = null;

  const fitness = (bits) => bits.reduce((sum, bit, i) => sum + (bit === target[i] ? 1 : 0), 0);
  const observe = () => angles.map((theta) => (random() < Math.sin(theta) ** 2 ? 1 : 0));

  // Returns the best string observed in this generation.
  const step = () => {
    const observed = Array.from({ length: samples }, () => {
      const bits = observe();
      return { bits, score: fitness(bits) };
    });
    // Ties replace the best too, which lets the search drift off a plateau.
    for (const candidate of observed) if (!best || candidate.score >= best.score) best = candidate;
    for (const { bits } of observed) {
      angles = angles.map((theta, i) => {
        if (bits[i] === best.bits[i]) return theta;
        const towards = best.bits[i] === 1 ? 1 : -1;
        return Math.min(Math.PI / 2 - EDGE, Math.max(EDGE, theta + towards * STEP));
      });
    }
    return observed.reduce((a, b) => (b.score > a.score ? b : a));
  };

  return { step, angles: () => angles, best: () => best };
};
