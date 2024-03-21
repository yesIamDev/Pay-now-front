import { atom, selector } from "recoil";

export const courState = atom ({
    key: "cours-state",
    default: {
        cours: [],
        currentCour : null
    }
})

export const fetchCours = selector({
    key:"fetch-cours",
    get: async ({get}) => {
        const {cours} = get(courState);
        try{
            const response = await fetch("");
            if(!response.ok){
                throw new Error("Erreur HTTP: " + response.status);
            }
            const data = await response.json();
            return data;
        }catch(error){
            console.error("une erreur s'est produite:",error);
            return [];
        }
    },
    set: ({set}, newValue) => {
        set(courState.cours, newValue)
    }
})