type a1 = number;
type a2 = undefined;
type a3 = null;

// nested conditional type
type d = a1 extends string? string: a2 extends number? number: a3 extends undefined?undefined: never;

// check proparty
type sheikFamily = {
    name: string,
    wife1: string,
    wife2: boolean
}

type checkProparty<T, K> = K extends keyof sheikFamily? true : false;

type checkWife = checkProparty<sheikFamily, 'wife1'>;

// Remove single friend from friendsType using generic 
type friendsType = "Pritish" | "Fardin" | "sifat";

type RemoveOneFriend<T, K> = T extends K? never: T;

type currentFriends = RemoveOneFriend<friendsType, "Fardin">;