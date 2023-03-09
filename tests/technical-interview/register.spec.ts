import { test, expect } from '@playwright/test';

//Generate a random string for user name
const randomString = Math.random().toString(36).slice(2);

//Generate a random string for user email
const randomEmail = `${randomString}@gmail.com`;

test('Register a user from Mundopsicologos web page', async ({ page }) => {

  // Visit the main page  
  await page.goto('https://www.mundopsicologos.com/');

  // Check the web main title 
  await expect(page).toHaveTitle('Psicólogos - MundoPsicologos.com');

  // Click in the register option
  await page.locator('span:has-text("Regístrate")').click();

  // Check the url of the register form
  await expect(page).toHaveURL('https://www.mundopsicologos.com/profile/register');

  // Check the register title
  await expect(page).toHaveTitle('Crear una cuenta');

  // Fill the name field
  await page.locator('#registerName').fill(randomString);

  // Fill the email field
  await page.locator('#registerEmail').fill(randomEmail);

  // Fill the password field
  await page.locator('#registerPwd').fill('A12345678');

  // Open the selector pressing space key 3 times (sorry!) and then fill the city
  for (let i = 0; i < 3; i++) {
    await page.locator('input[name="profile_loc"]').press('Space');
  }
  await page.locator('text=Abades, Segovia').click();
  
  // Check the box with the terms
  await expect(page.locator('.ie-rgpd-container')).toContainText('INFORMACIÓN BÁSICA SOBRE PROTECCIÓN DE DATOS');

  // Check terms
  await page.locator('text=He leído y acepto las Condiciones de uso y la Política de Protección de Datos.').click();

  // Check comercial information
  await page.locator('text=Acepto recibir información comercial de MundoPsicologos y entiendo que puedo can').click();

  // Click and submit the form
  await page.locator('text=Enviar').click();

  // Check the url of the user registered dashboard
  await expect(page).toHaveURL('https://www.mundopsicologos.com/user_menu#dashboard');

  // Check the welcome text
  await expect(page.locator('.menu-receptionist-image_caption')).toContainText('¡Bienvenido/a a MundoPsicologos.com!');
});