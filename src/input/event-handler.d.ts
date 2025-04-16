declare class EventHandler {
    private eventHandlers;
    constructor();
    on(event: string, handler: Function): void;
    emit(event: string, ...args: any[]): void;
    off(event: string, handler: Function): void;
    clear(event: string): void;
    clearAll(): void;
    getEvents(): {
        [key: string]: Function[];
    };
    getEventsByName(event: string): Function[];
    getEventsCount(): number;
    getEventsCountByName(event: string): number;
    getEventsNames(): string[];
    getEventsNamesCount(): number;
    getEventsNamesCountByName(event: string): number;
    getEventsByNameCount(event: string): number;
    getEventsByNameCountByName(event: string): number;
}
export default EventHandler;
export { EventHandler };
