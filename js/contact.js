const countryCodes = [
  { code: "+65", name: "Singapore" },
  { code: "+60", name: "Malaysia" },
  { code: "+62", name: "Indonesia" },
  { code: "+81", name: "Japan" },
  { code: "+82", name: "South Korea" },
  { code: "+91", name: "India" },
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
];

const select = document.getElementById("code");

const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.textContent = "Select Code";
defaultOption.disabled = true;
defaultOption.selected = true;
select.appendChild(defaultOption);

countryCodes.forEach((c) => {
  const option = document.createElement("option");
  option.value = c.code;
  option.textContent = `${c.code} (${c.name})`;
  select.appendChild(option);
});
