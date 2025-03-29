interface ParticleInterface {
  x: number;
  y: number;
  color: string;
  size: number;
  life: number;
  vx: number;
  vy: number;
}

export class Particle implements ParticleInterface {
  x: number;
  y: number;
  color: string;
  size: number;
  life: number;
  vx: number;
  vy: number;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = Math.random() * 10 + 5;
    this.life = 20;
    this.vx = (Math.random() - 0.5) * 4;
    this.vy = (Math.random() - 0.5) * 4;
  }
}
