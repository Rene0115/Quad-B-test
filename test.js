const data = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
    key6: "value6",
    key7: "value7",
    key8: "value8",
    key9: "value9",
    key10: "value10",
    key11: "value11",
    key12: "value12",
  };
  
  const first10Items = {};
  let count = 0;
  
  for (const key in data) {
    if (count >= 10) {
      break;
    }
  
    first10Items[key] = data[key];
    count++;
  }
  
  console.log(first10Items);
  