// event.ts

// EventHandler
export type EventHandler<T> = (data: T) => void;

// Event
export class Event<T> {
  // handlers
  private handlers: Array<EventHandler<T>>;
  // Event()
  constructor() {
    this.handlers = [];
  }
  // emit()
  public emit(data: T): void {
    for (const h of this.handlers) {
      h(data);
    }
  }
  // subscribe()
  public subscribe(handler: EventHandler<T>): void {
    this.handlers.push(handler);
  }
}
