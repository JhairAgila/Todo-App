import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, distpatch] = React.useReducer(reducer, initialState({initialValue}) );

  const {loading,
    error,
    item,
    sincronizedItem,
    } = state;

    //ACTIONS CREATORS
    const onError = (error) => distpatch({ type: actionType.error, payload: error, });
    const onSuccess = (parsedItem) => distpatch({ type: actionType.success, payload: parsedItem,});
    const onSave = (newTodos) => distpatch({type: actionType.save, payload: newTodos,});
    const onSetItem = (item) => distpatch({ type: actionType.setItem, payload: item,});

    const onSincronizeItem = () => 
      distpatch({
        type: actionType.sincronize,
      });
    

    React.useEffect(() => {
      try {
        setTimeout(() => {
          // onSetItem([]);
          const localStorageItems = localStorage.getItem(itemName);
          let parsedItem;

          if (!localStorageItems) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItems);
          }
          onSuccess(parsedItem);
        }, 1000);
      } catch (error) {
        onError(error);
      }
    }, [sincronizedItem]);
  
    const saveItem = (newTodos) => {
      try {
        const stringifiedTodos = JSON.stringify(newTodos);
        localStorage.setItem(itemName, stringifiedTodos);
        onSave(newTodos);
        // setItem(newTodos);
      } catch (error) {
        onError(error);
        // setError(error);
      }
    };
  const sincronizeItem = () => {
    onSincronizeItem();
  };

    return {
      item,
      saveItem,
      loading,
      error,
      sincronizeItem,
      sincronizedItem,
    };
  }
  
  const initialState = ({initialValue}) => ({
    sincronizedItem: true,
    error: false,
    loading: true, 
    item: initialValue,
    });

  const actionType = {
    error : 'ERROR', 
    success : 'SUCCESS',
    save : 'SAVE',
    sincronize : 'SINCRONIZE',
    setItem : 'SETITEM',
  }
  const reducerObject = (state, payload) => ({
    [actionType.error] : {
      ...state,
      error: true,
    },
    [actionType.success] : {
      ...state,
      item : payload,
      error: false,
      loading: false,
      sincronizedItem: true,
    },
    [actionType.save] : {
      ...state,
      item: payload,
    },
    [actionType.sincronize] : {
      ...state,
      sincronizedItem: false,
      loading: true,
    },
    [actionType.setItem] : {
      ...state,
      item: payload,
    },

  });

  const reducer = (state, action) => { 
    return reducerObject(state, action.payload)[action.type] || state;
  }

  export {useLocalStorage};