interface NoteInterface {
  x: number;
  y: number;
  color: string;
  radius: number;
  targetTime: number;
  rotation: number;
}

export class Note implements NoteInterface {
  x: number;
  y: number;
  color: string;
  radius: number;
  targetTime: number;
  rotation: number;

  constructor(x: number, color: string, time: number) {
    this.x = x;
    this.y = -40;
    this.color = color;
    this.radius = 25;
    this.targetTime = time;
    this.rotation = 0;
  }
}
