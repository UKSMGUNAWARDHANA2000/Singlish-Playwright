import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('hoDHin innavadha?');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('හොඳින් ඉන්නවද?', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0002 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('mata nidhimathayi.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('මට නිදිමතයි.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0003 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('mata meeka oonii.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('මට මේක ඕනී.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0004 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('vaessa vaetunaa,ee nisaa sellama naevaeththuvaa.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('වැස්ස වැටුනා,ඒ නිසා සෙල්ලම නැවැත්තුවා.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0005 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('mama gedhara aavata passee nidhagaththaa.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('මම ගෙදර ආවට පස්සේ නිදගත්තා.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0006 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('oya enavaanam mama balan innavaa.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('ඔය එනවානම් මම බලන් ඉන්නවා.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0007 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('karuNaakaralaa dhaen veelaava kiyanna puluvandha?');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('කරුණාකරලා දැන් වේලාව කියන්න පුලුවන්ද?', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0008 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('oyaa eeka karalaa thiyenavaadha?');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('ඔයා ඒක කරලා තියෙනවාද?', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0009 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('dhaenma eeka dhenna.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('දැන්ම ඒක දෙන්න.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0010 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('mata kiyanna.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('මට කියන්න.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0011 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('eeka dhenna.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('ඒක දෙන්න.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0012 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('eyaata sinhala kiyavanna puluvan.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('එයාට sinhala කියවන්න පුලුවන්.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0013 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('eyaata sinhala kiyavanna baehae.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('එයාට sinhala කියවන්න බැහැ.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0014 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('aayuboovan!');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('ආයුබෝවන්!', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0015 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('suba udhaeesanak!');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('සුබ උදෑසනක්!', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0016 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('paeena dhenna puluvandha?');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('පෑන දෙන්න පුලුවන්ද?', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0017 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('karuNaakaralaa eeka poddak balanna.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('කරුණාකරලා ඒක පොඩ්ඩක් බලන්න.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0018 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('mama iiyee paadam kaLaa.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('මම ඊයේ පාඩම් කළා.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0019 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('mama dhaen gedhara yanavaa.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('මම දැන් ගෙදර යනවා.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0020 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('mama heta gedhara yannam.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('මම හෙට ගෙදර යන්නම්.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0021 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('mama yanna hadhannee.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('මම යන්න හදන්නේ.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0022 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('api kamu.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('අපි කමු.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0023 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('Zoom meeting ekak thiyennee.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('Zoom  meeting එකක් තියෙන්නේ.', { exact: false })
  ).toBeVisible();
});
test('Pos_Fun_0024 - Singlish to Sinhala conversion', async ({ page }) => {

  // Open site
  await page.goto('https://www.swifttranslator.com/');

  // Singlish input (this selector is correct)
  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Type input
  await singlishInput.fill('hari hari lassanayi.');

  // Assert Sinhala output appears anywhere on the page
  await expect(
    page.getByText('හරි හරි ලස්සනයි.', { exact: false })
  ).toBeVisible();
});
test('Neg_Fun_0001 - Joined words robustness failure', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Intentionally incorrect / joined input
  await singlishInput.fill('mamage dharayanavaa');

  // Wait for real-time processing
  await page.waitForTimeout(1000);

  // Correct Sinhala sentence should NOT appear
  await expect(
    page.getByText('මම ගෙදර යනවා', { exact: false })
  ).not.toBeVisible();
});
test('Neg_Fun_0002 - Joined words robustness failure', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Intentionally incorrect / joined input
  await singlishInput.fill('matapaankannaoonee');

  // Wait for real-time processing
  await page.waitForTimeout(1000);

  // Correct Sinhala sentence should NOT appear
  await expect(
    page.getByText('මට පාන් කන්න ඕනී', { exact: false })
  ).not.toBeVisible();
});
test('Neg_Fun_0003 - Joined words robustness failure', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Intentionally incorrect / joined input
  await singlishInput.fill('api passee kathaa karamu machan. mama office eka giyaa kiyalaa oya dhannavaa nedha? ehenam heta api Colombo yanna hadhannam thiyennee. mama train eken yanavaa haebaeyi bus eken gihin amaarui kiyalaa hithennavaa. oyaa WhatsApp ekak dhaapan mata. ape meeting eka postpone karalaa thiyennam kiyalaa manager kiyalavaa hodhata. Documents tika mata evanna email eken please.');

  // Wait for real-time processing
  await page.waitForTimeout(1000);

  // Correct Sinhala sentence should NOT appear
  await expect(
    page.getByText('අපි පස්සේ කතා කරමු මචන්. මම office එක ගියා කියලා ඔය දන්නවා නේද? එහෙනම් හෙට අපි Colombo යන්න හදන්නම් තියෙන්නේ. මම train එකෙන් යනවා හැබැයි bus එකෙන් ගිහින් අමාරුඉ කියලා හිතෙන්නවා. ඔයා WhatsApp එකක් දාපන් මට. ape meeting එක postpone කරලා තියෙන්නම් කියලා manager කියලවා හොදට. Documents ටික මට එවන්න email එකෙන් please.', { exact: false })
  ).not.toBeVisible();
});
test('Neg_Fun_0004 - Joined words robustness failure', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Intentionally incorrect / joined input
  await singlishInput.fill('ela machan! supiri!!');

  // Wait for real-time processing
  await page.waitForTimeout(1000);

  // Correct Sinhala sentence should NOT appear
  await expect(
    page.getByText('එල මචං! සුපිරි!!', { exact: false })
  ).not.toBeVisible();
});
test('Neg_Fun_0005 - Joined words robustness failure', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Intentionally incorrect / joined input
  await singlishInput.fill('ela machan! supiri!! oyaa eeka karanna puLuvan una nam mama super bQQ.');

  // Wait for real-time processing
  await page.waitForTimeout(1000);

  // Correct Sinhala sentence should NOT appear
  await expect(
    page.getByText('එල මචං! සුපිරි!! ඔයා එක කරන්න පුළුවන් උනා නම් මම super බං.', { exact: false })
  ).not.toBeVisible();
});
test('Neg_Fun_0006 - Joined words robustness failure', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Intentionally incorrect / joined input
  await singlishInput.fill('mama gedhara yanavaa.oyaa enavadha maath ekka yanna?');

  // Wait for real-time processing
  await page.waitForTimeout(1000);

  // Correct Sinhala sentence should NOT appear
  await expect(
    page.getByText('මම ගෙදර යනවා.ඔයා එනවද මාත් එක්ක යන්න?', { exact: false })
  ).not.toBeVisible();
});
test('Neg_Fun_0007 - Joined words robustness failure', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Intentionally incorrect / joined input
  await singlishInput.fill('mata   kiyanna.');

  // Wait for real-time processing
  await page.waitForTimeout(1000);

  // Correct Sinhala sentence should NOT appear
  await expect(
    page.getByText('මට කියන්න.', { exact: false })
  ).not.toBeVisible();
});
test('Neg_Fun_0008 - Joined words robustness failure', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Intentionally incorrect / joined input
  await singlishInput.fill('ATM eken Rs. 5000 ganna CVV eka type karanna.');

  // Wait for real-time processing
  await page.waitForTimeout(1000);

  // Correct Sinhala sentence should NOT appear
  await expect(
    page.getByText(' ATM එකෙන් Rs. 5000 ගන්න CVV එක type කරන්න.', { exact: false })
  ).not.toBeVisible();
});
test('Neg_Fun_0009 - Joined words robustness failure', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Intentionally incorrect / joined input
  await singlishInput.fill('tika tika');

  // Wait for real-time processing
  await page.waitForTimeout(1000);

  // Correct Sinhala sentence should NOT appear
  await expect(
    page.getByText('ටික ටික', { exact: false })
  ).not.toBeVisible();
});
test('Neg_Fun_0010 - Joined words robustness failure', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Intentionally incorrect / joined input
  await singlishInput.fill('lankaa sQQskritheeka adhYaapanaya');

  // Wait for real-time processing
  await page.waitForTimeout(1000);

  // Correct Sinhala sentence should NOT appear
  await expect(
    page.getByText('ලංකා සංස්කෘතීක අධ්‍යාපනය.', { exact: false })
  ).not.toBeVisible();
});
test('Pos_UI_0001 - Joined words robustness failure', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');

  const singlishInput = page.locator('textarea[placeholder*="Singlish"]');

  // Intentionally incorrect / joined input
  await singlishInput.fill('mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.');

  // Wait for real-time processing
  await page.waitForTimeout(1000);

  // Correct Sinhala sentence should NOT appear
  await expect(
    page.getByText('මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.', { exact: false })
  ).not.toBeVisible();
});
