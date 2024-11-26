import { create } from "zustand";
export const useStore = create((set) => ({
  showReplyid: 0,
  hanldeReply: (id) => set(() => ({ showReplyid: id })),
}));

export const useInputData = create((set) => ({
  inputData: "",
  eidtinputData: "",
  setInputData: (newInputData) =>
    set(() => ({
      inputData: newInputData,
    })),
  setEidtInputData: (newEidtInputData) =>
    set(() => ({
      eidtinputData: newEidtInputData,
    })),
}));

export const useSave = create((set) => ({
  SaveData: [],
  setSaveData: (yu) =>
    set((state) => {
      if (yu) {
        return {
          SaveData: [
            ...state.SaveData,
            {
              message: yu,
              reply: [],
              id: Math.random() * 1000,
              likes: 0,
              showReply: false,
            },
          ],
        };
      }
      return state;
    }),

  setEidtInputupdate: (id, input) =>
    set((state) => ({
      SaveData: state.SaveData.map((item) =>
        Number(item.id) === Number(id) ? { ...item, message: input } : item
      ), // newEidtInputData = undefined
    })),

  ChangeReply: (id) =>
    set((state) => {
      console.log("");
      return {
        SaveData: state.SaveData.map((item) =>
          item.id === id ? { ...item, showReply: !item.showReply } : item
        ),
      };
    }),
  SaveDataDelete: (id) =>
    set((state) => {
      console.log("");
      return {
        SaveData: state.SaveData.filter(
          (item) => Number(item.id) !== Number(id)
        ),
      };
    }),
      
      setIncrease: (id) =>
        set((state) => {
          const updatedData = state.SaveData.map((item) =>  
            item.id === id ? { ...item, likes:item.likes + 1 } : item
          );
          console.log("Updated SaveData (Increase):", updatedData);
          return { SaveData: updatedData };
        }),
      
      setDecrease: (id) =>
        set((state) => {
          const updatedData = state.SaveData.map((item) =>  
            item.id === id ? { ...item, likes: item.likes - 1 } : item
          );
          console.log("Updated SaveData (Decrease):", updatedData);
          return { SaveData: updatedData };
        }),
    }));
    
    