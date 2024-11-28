import { create } from "zustand";
export const useStore = create((set) => ({
  showReplyid: 0,
  hanldeReply: (id) => set(() => ({ showReplyid: id })),
}));

export const useInputData = create((set) => ({
  inputData: "",
  eidtinputData: "",
  replyInputData:"",
  setInputData: (newInputData) =>
    set(() => ({
      inputData: newInputData,
    })),
  setEidtInputData: (newEidtInputData) =>
    set(() => ({
      eidtinputData: newEidtInputData,
    })),
    setReplyInputData: (newReplyInputData) =>
      set(() => ({
       replyInputData: newReplyInputData,
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
              commentOpen: false,
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
      
      return {
        SaveData: state.SaveData.map((item) =>
          Number(item.id) === Number(id)
            ? { ...item, showReply: !item.showReply }
            : item
        ),
      };
    }),
    SaveDataDelete: (id) =>
      set((state) => {
        return {
          SaveData: state.SaveData.filter((item) => String(item.id) !== String(id)),
        };
      }),
  setIncrease: (id) =>
    set((state) => {
      const updatedData = state.SaveData.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      );
      return { SaveData: updatedData };
    }),
  setDecrease: (id) =>
    set((state) => {
      const updatedData = state.SaveData.map((item) =>
        item.id === id ? { ...item, likes: item.likes - 1 } : item
      );
      return { SaveData: updatedData };
    }),
  setcommentOpen: (id) =>
    set((state) => {
      console.log(id);
      return {
        SaveData: state.SaveData.map((item) =>
          Number(item.id) === Number(id)
            ? { ...item, commentOpen: !item.commentOpen }
            : item
        ),
      };
    }),
  AddReply: (id, replyInputData) =>
    set((state) => {
      console.log("s",replyInputData);
      return {
        SaveData: state.SaveData.map((item) =>
          Number(item.id) === Number(id) ? { ...item, reply: [...item.reply, {singleReply:replyInputData}] } : item
        ),
      };
    }),
}));
