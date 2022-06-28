export type Level = {
  title: string;
  color: string;
  icon: 'down' | 'up';
  imc: Array<number>,
  yourImc?: number;
  // yourWeight?: number;
}

export const levels: Array<Level> = [
  { title: 'Magreza', color: '#96AEAB', icon: 'down', imc: [0, 18.5] },
  { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.99] },
  { title: 'Sobrepeso', color: '#E2B036', icon: 'down', imc: [25.00, 30] },
  { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] }
];

export function CalculeteImc(height: number, weight: number): Level | null {
  const imc = weight / (height * height);

  for (let level in levels) {
    if (imc >= levels[level].imc[0] && imc < levels[level].imc[1]) {
      let levelCopy: Level = { ...levels[level] };
      levelCopy.yourImc = parseFloat(imc.toFixed(2));
      return levelCopy;
    }
  }

  return null;
}