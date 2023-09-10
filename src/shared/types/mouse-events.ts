export type ClickEvent<GenericElement> = MouseEvent & {
	currentTarget: EventTarget & GenericElement;
};
