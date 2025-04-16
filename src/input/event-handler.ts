class EventHandler {
    private eventHandlers: { [key: string]: Function[] } = {};

    constructor() {
        this.eventHandlers = {};
    }

    public on(event: string, handler: Function): void {
        if (!this.eventHandlers[event]) {
            this.eventHandlers[event] = [];
        }
        this.eventHandlers[event].push(handler);
    }

    public emit(event: string, ...args: any[]): void {
        if (this.eventHandlers[event]) {
            this.eventHandlers[event].forEach(handler => handler(...args));
        }
    }
    public off(event: string, handler: Function): void {
        if (this.eventHandlers[event]) {
            this.eventHandlers[event] = this.eventHandlers[event].filter(h => h !== handler);
        }
    }
    public clear(event: string): void {
        if (this.eventHandlers[event]) {
            this.eventHandlers[event] = [];
        }
    }
    public clearAll(): void {
        this.eventHandlers = {};
    }
    public getEvents(): { [key: string]: Function[] } {
        return this.eventHandlers;
    }
    public getEventsByName(event: string): Function[] {
        return this.eventHandlers[event] || [];
    }
    public getEventsCount(): number {
        return Object.keys(this.eventHandlers).length;
    }
    public getEventsCountByName(event: string): number {
        return this.eventHandlers[event] ? this.eventHandlers[event].length : 0;
    }
    public getEventsNames(): string[] {
        return Object.keys(this.eventHandlers);
    }
    public getEventsNamesCount(): number {
        return this.getEventsNames().length;
    }
    public getEventsNamesCountByName(event: string): number {
        return this.getEventsCountByName(event);
    }
    public getEventsByNameCount(event: string): number {
        return this.getEventsCountByName(event);
    }
    public getEventsByNameCountByName(event: string): number {
        return this.getEventsCountByName(event);
    }
}

export default EventHandler;
export { EventHandler };
