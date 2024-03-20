import { factory } from './factory';

let count = factory(0, 1);

function update_count_and_reset_counter() {
  count = factory(Number(start_at_control.value), Number(step_control.value));
  update_count();
}

const start_at_control = document.getElementById(
  'start_at',
) as HTMLInputElement;

const step_control = document.getElementById('step') as HTMLInputElement;

start_at_control?.addEventListener('change', update_count_and_reset_counter);

step_control?.addEventListener('change', update_count_and_reset_counter);

const count_button = document.querySelector(
  '.count_button',
) as HTMLButtonElement;

const current_count = document.querySelector(
  '.current_count',
) as HTMLSpanElement;

function update_count() {
  const currentCount = count();
  current_count.innerText = currentCount.toString();
}

update_count();

count_button.addEventListener('click', update_count);
