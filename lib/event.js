// event.ts
// Event
export class Event {
    // Event()
    constructor() {
        this.handlers = [];
    }
    // emit()
    emit(data) {
        for (const h of this.handlers) {
            h(data);
        }
    }
    // subscribe()
    subscribe(handler) {
        this.handlers.push(handler);
    }
}
//# sourceMappingURL=event.js.map