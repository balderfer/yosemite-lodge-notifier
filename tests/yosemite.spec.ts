import { test, expect } from "@playwright/test";

test("test 8/9-10", async ({ page }) => {
  await page.goto(
    "https://reservations.ahlsmsworld.com/Yosemite/Plan-Your-Trip"
  );
  await page
    .locator("#box-widget_InitialProductSelection")
    .selectOption("Yosemite Valley Lodge");
  await page.locator("#box-widget_Adults").selectOption("3");
  await page.locator("#box-widget_ArrivalDate").fill("08/09/2024");
  await page.locator("#box-widget_DepartureDate").fill("08/10/2024");
  await page.getByRole("button", { name: "Check Availability" }).click();
  await expect(
    page.getByRole("heading", { level: 3, name: "YOUR SEARCH:" })
  ).toBeVisible({ timeout: 30000 });
  const headings = await page.getByRole("heading", { level: 3 }).all();
  const rooms: string[] = [];
  for (const heading of headings) {
    console.log(await heading.textContent());
    const text = await heading.textContent();
    if (text && text.includes("Room")) {
      rooms.push(text);
    }
  }

  if (rooms.length) {
    await fetch("https://ntfy.sh/balderfer-yvl-alerts", {
      method: "POST", // PUT works too
      body: `8/9–8/10 | Rooms available: ${rooms.join(", ")}`,
    });
  }
});

test("test 8/10-11", async ({ page }) => {
  await page.goto(
    "https://reservations.ahlsmsworld.com/Yosemite/Plan-Your-Trip"
  );
  await page
    .locator("#box-widget_InitialProductSelection")
    .selectOption("Yosemite Valley Lodge");
  await page.locator("#box-widget_Adults").selectOption("3");
  await page.locator("#box-widget_ArrivalDate").fill("08/10/2024");
  await page.locator("#box-widget_DepartureDate").fill("08/11/2024");
  await page.getByRole("button", { name: "Check Availability" }).click();
  await expect(
    page.getByRole("heading", { level: 3, name: "YOUR SEARCH:" })
  ).toBeVisible({ timeout: 30000 });
  const headings = await page.getByRole("heading", { level: 3 }).all();
  const rooms: string[] = [];
  for (const heading of headings) {
    console.log(await heading.textContent());
    const text = await heading.textContent();
    if (text && text.includes("Room")) {
      rooms.push(text);
    }
  }

  if (rooms.length) {
    await fetch("https://ntfy.sh/balderfer-yvl-alerts", {
      method: "POST", // PUT works too
      body: `8/10–8/11 | Rooms available: ${rooms.join(", ")}`,
    });
  }
});
