export interface ITodo {
    id: number;
    task: string;
    description: string;
    completed: boolean;
}

export interface IGrocery {
    id: number;
    amount: number;
    item: string;
    completed: boolean;

}

export interface IDinner {
    id: number;
    productName: string;
    itemCost: number;
}

export interface IPantry {
    id: number;
    productName: string;
    itemCost: number;
}