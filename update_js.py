with open('planner-cozy-menu/app.js') as f:
    js = f.read()

# Replace event listeners for days
old_listeners = '''  // Custom Days Counter (1 to 30)
  document.getElementById('btn-days-minus').addEventListener('click', () => {
    if (state.planDays > 1) {
      state.planDays--;
      state.planMode = 'diario';
      syncModeTabsUI();
      updateDaysDisplay();
      saveStateToStorage();
      renderPlannerCanvas();
    }
  });

  document.getElementById('btn-days-plus').addEventListener('click', () => {
    if (state.planDays < 30) {
      state.planDays++;
      state.planMode = 'diario';
      syncModeTabsUI();
      updateDaysDisplay();
      saveStateToStorage();
      renderPlannerCanvas();
    }
  });'''

new_listeners = '''  // Custom Days Counter (1 to 30) with Keyboard Input & Validation
  const daysInput = document.getElementById('input-days-count');
  const errorMsg = document.getElementById('days-error-msg');

  function validateAndUpdateDays(val) {
    const num = parseInt(val, 10);
    if (isNaN(num) || num < 1 || num > 30) {
      errorMsg.classList.remove('hidden');
      daysInput.classList.add('border-red-500', 'text-red-600');
      return false;
    } else {
      errorMsg.classList.add('hidden');
      daysInput.classList.remove('border-red-500', 'text-red-600');
      state.planDays = num;
      state.planMode = 'diario';
      syncModeTabsUI();
      saveStateToStorage();
      renderPlannerCanvas();
      return true;
    }
  }

  daysInput.addEventListener('input', (e) => {
    validateAndUpdateDays(e.target.value);
  });

  daysInput.addEventListener('blur', (e) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < 1) {
      daysInput.value = 1;
      validateAndUpdateDays(1);
    } else if (val > 30) {
      daysInput.value = 30;
      validateAndUpdateDays(30);
    }
  });

  document.getElementById('btn-days-minus').addEventListener('click', () => {
    if (state.planDays > 1) {
      state.planDays--;
      daysInput.value = state.planDays;
      validateAndUpdateDays(state.planDays);
    }
  });

  document.getElementById('btn-days-plus').addEventListener('click', () => {
    if (state.planDays < 30) {
      state.planDays++;
      daysInput.value = state.planDays;
      validateAndUpdateDays(state.planDays);
    }
  });'''

js = js.replace(old_listeners, new_listeners)

old_update_fn = '''function updateDaysDisplay() {
  document.getElementById('days-count').innerText = state.planDays;
}'''

new_update_fn = '''function updateDaysDisplay() {
  const daysInput = document.getElementById('input-days-count');
  const errorMsg = document.getElementById('days-error-msg');
  if (daysInput) daysInput.value = state.planDays;
  if (errorMsg) errorMsg.classList.add('hidden');
}'''

js = js.replace(old_update_fn, new_update_fn)

with open('planner-cozy-menu/app.js', 'w') as f:
    f.write(js)

print('Updated app.js successfully!')
