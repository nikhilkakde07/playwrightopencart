# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegentest.spec.ts >> test
- Location: tests\codegentest.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'firstName' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e5]:
      - link "logo area" [ref=e7] [cursor=pointer]:
        - /url: https://www.kapruka.com
        - img "logo area" [ref=e8]
      - generic [ref=e12]:
        - textbox "SEARCH PRODUCTS.." [ref=e13]
        - button "online search" [ref=e14] [cursor=pointer]:
          - img "Search" [ref=e15]
      - generic [ref=e16]:
        - combobox "Select Currency" [ref=e17]:
          - option "INR" [selected]
          - option "USD"
        - combobox "Select language" [ref=e18]:
          - option "Lang"
          - option "සිං"
          - option "Eng" [selected]
        - link [ref=e21] [cursor=pointer]:
          - /url: /shops/checkout/deliveryCartViewPage.jsp
          - img [ref=e24]
        - link "Check Order Status" [ref=e29] [cursor=pointer]:
          - /url: https://www.kapruka.com/contactUs/orderStatus.jsp
          - img "status" [ref=e30]
        - link "Login to Your Account" [ref=e32] [cursor=pointer]:
          - /url: https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp
          - img [ref=e33]
    - list [ref=e37]:
      - listitem [ref=e38]:
        - generic [ref=e40] [cursor=pointer]: All Categories
      - listitem [ref=e41]:
        - link "Event Icon Father's Day Offers" [ref=e42] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/fathersday
          - img "Event Icon" [ref=e44]
          - generic [ref=e45]: Father's Day Offers
      - listitem [ref=e46]:
        - link "Same Day Rush delivery" [ref=e47] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/samedaydelivery
          - img "Same Day" [ref=e49]
          - generic [ref=e50]: Rush delivery
      - listitem [ref=e51]:
        - link "On Sale" [ref=e52] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/promotions
          - generic [ref=e54]: On Sale
      - listitem [ref=e55]:
        - link "Events" [ref=e56] [cursor=pointer]:
          - /url: https://www.kapruka.com/shops/events_home.jsp
          - generic [ref=e58]: Events
      - listitem [ref=e59]:
        - link "Brands" [ref=e60] [cursor=pointer]:
          - /url: https://www.kapruka.com/online_brands.jsp
          - generic [ref=e62]: Brands
      - listitem [ref=e63]:
        - link "For You" [ref=e64] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/combogifts
          - generic [ref=e66]: For You
  - generic [ref=e72]:
    - list [ref=e73]:
      - listitem [ref=e74]:
        - link "Home" [ref=e75] [cursor=pointer]:
          - /url: https://www.kapruka.com
          - generic [ref=e76]: Home
      - listitem [ref=e77]:
        - generic [ref=e78]: / Customer Account Login
    - heading "Create a New Kapruka Account" [level=1] [ref=e79]
    - generic [ref=e82]:
      - generic [ref=e84]:
        - heading "New Customers" [level=3] [ref=e85]
        - table [ref=e87]:
          - rowgroup [ref=e88]:
            - row "First Name" [ref=e89]:
              - cell "First Name" [ref=e90]:
                - generic [ref=e91]: First Name
              - cell [ref=e92]:
                - textbox [ref=e93]
            - row "Last Name" [ref=e94]:
              - cell "Last Name" [ref=e95]:
                - generic [ref=e96]: Last Name
              - cell [ref=e97]:
                - textbox [ref=e98]
            - row "Email Address" [ref=e99]:
              - cell "Email Address" [ref=e100]:
                - generic [ref=e101]: Email Address
              - cell [ref=e102]:
                - textbox [ref=e103]
            - row "Create Password" [ref=e104]:
              - cell "Create Password" [ref=e105]:
                - generic [ref=e106]: Create Password
              - cell [ref=e107]:
                - textbox [ref=e108]
            - row "Confirm Password (Re-type password)" [ref=e109]:
              - cell "Confirm Password (Re-type password)" [ref=e110]:
                - generic [ref=e111]:
                  - text: Confirm Password
                  - text: (Re-type password)
              - cell [ref=e112]:
                - textbox [ref=e113]
            - row "Create Account" [ref=e114]:
              - cell
              - cell "Create Account" [ref=e115]:
                - button "Create Account" [ref=e116] [cursor=pointer]
      - generic [ref=e117]:
        - heading "Account Benifits" [level=3] [ref=e118]
        - table [ref=e119]:
          - rowgroup [ref=e120]:
            - row "Save time, place quick orders As a registered member, you will be able to place quick orders at Kapruka using your saved address information. Special Discounts When we offer special discounts, we give 1st preference to members. Also, get cash back bonuses and Kapruka Rewards Points for selected items Order Status Receive email confirmations when items you've ordered gets delivered / shipped. Your Order History See your current and past orders from Kapruka, and get instant updates on order status and delivery and shipping information. Address Book Save addresses of your gift recipients in Sri Lanka. Also save shipping addresses when you buy Sri Lankan merchandise from Kapruka. Repeat previous orders Repeat a previous order with a couple of clicks. Using your saved order history it has become easy to repeat orders within a couple of minutes." [ref=e121]:
              - cell "Save time, place quick orders As a registered member, you will be able to place quick orders at Kapruka using your saved address information. Special Discounts When we offer special discounts, we give 1st preference to members. Also, get cash back bonuses and Kapruka Rewards Points for selected items Order Status Receive email confirmations when items you've ordered gets delivered / shipped. Your Order History See your current and past orders from Kapruka, and get instant updates on order status and delivery and shipping information. Address Book Save addresses of your gift recipients in Sri Lanka. Also save shipping addresses when you buy Sri Lankan merchandise from Kapruka. Repeat previous orders Repeat a previous order with a couple of clicks. Using your saved order history it has become easy to repeat orders within a couple of minutes." [ref=e122]:
                - generic [ref=e123]: Save time, place quick orders
                - text: As a registered member, you will be able to place quick orders at Kapruka using your saved address information.
                - generic [ref=e124]: Special Discounts
                - text: When we offer special discounts, we give 1st preference to members. Also, get cash back bonuses and
                - link "Kapruka Rewards Points" [ref=e125] [cursor=pointer]:
                  - /url: https://www.kapruka.com/shops/customerAccounts/faq.jsp
                - text: for selected items
                - generic [ref=e126]: Order Status
                - text: Receive email confirmations when items you've ordered gets delivered / shipped.
                - generic [ref=e127]: Your Order History
                - text: See your current and past orders from Kapruka, and get instant updates on order status and delivery and shipping information.
                - generic [ref=e128]: Address Book
                - text: Save addresses of your gift recipients in Sri Lanka. Also save shipping addresses when you buy Sri Lankan merchandise from Kapruka.
                - generic [ref=e129]: Repeat previous orders
                - text: Repeat a previous order with a couple of clicks. Using your saved order history it has become easy to repeat orders within a couple of minutes.
  - contentinfo [ref=e130]:
    - generic [ref=e131]:
      - heading "JOIN THE HAPPY CROWD" [level=4] [ref=e132]
      - paragraph [ref=e133]: Get New Arrivals and Exclusive Offers in Your Inbox
      - link "Sri Lankan Largest online Shopping Join Our Whatsapp Channel" [ref=e135] [cursor=pointer]:
        - /url: https://whatsapp.com/channel/0029VaqxVS23AzNPsQusIh3e
        - img "Sri Lankan Largest online Shopping" [ref=e137]
        - generic [ref=e138]: Join Our Whatsapp Channel
    - generic [ref=e139]:
      - generic [ref=e141]:
        - generic [ref=e142]: "SL:"
        - generic [ref=e143]:
          - text: 147 Old Kottawa Road, Nugegoda 10250, Sri Lanka
          - paragraph [ref=e144]:
            - text: "24/7 Hotline:"
            - link "+94117551111" [ref=e145] [cursor=pointer]:
              - /url: tel:+94117551111
          - text: "email:"
          - link "colombo.office@kapruka.com" [ref=e146] [cursor=pointer]:
            - /url: https://www.kapruka.com/contactUs/onlineHelpForm.jsp
          - link "whatsapp support in kapruka" [ref=e147] [cursor=pointer]:
            - /url: https://wa.me/message/GEDHPZLFW2E7O1
            - img "whatsapp support in kapruka" [ref=e148]
          - text: "Whatsapp Support:"
          - link "+94707117777" [ref=e149] [cursor=pointer]:
            - /url: https://wa.me/message/GEDHPZLFW2E7O1
      - generic [ref=e151]:
        - generic [ref=e152]: "USA:"
        - generic [ref=e153]:
          - text: 4364 Cranwood Parkway,
          - text: Warrensville Heights,OH,44128,
          - text: USA
          - text: "(Phone: +1-888-502-5244)"
          - text: "email:"
          - link "lexingtonky.office@kapruka.com" [ref=e154] [cursor=pointer]:
            - /url: https://www.kapruka.com/contactUs/onlineHelpForm.jsp
      - generic [ref=e156]:
        - generic [ref=e157]: "UK:"
        - generic [ref=e158]:
          - text: 145-157 St John Street, London
          - text: EC1V 4PY,
          - text: United Kingdom
          - text: "(Phone: +44-203-769-0961)"
          - text: "email:"
          - link "london.office@kapruka.com" [ref=e159] [cursor=pointer]:
            - /url: https://www.kapruka.com/contactUs/onlineHelpForm.jsp
      - generic [ref=e161]:
        - generic [ref=e162]: "AUS:"
        - generic [ref=e163]:
          - text: 440 Collins St
          - text: Level 9,#331,
          - text: Melbourne VIC 3000
          - text: "(Phone: +61-391-112-322)"
          - text: "email:"
          - link "melbourne.office@kapruka.com" [ref=e164] [cursor=pointer]:
            - /url: https://www.kapruka.com/contactUs/onlineHelpForm.jsp
    - generic [ref=e165]:
      - link "Sell With Kapruka" [ref=e167] [cursor=pointer]:
        - /url: "https://partnercentral.kapruka.com/ "
        - img "Sell With Kapruka" [ref=e168]
      - generic [ref=e169]:
        - text: Download
        - link "Kapruka App" [ref=e170] [cursor=pointer]:
          - /url: https://www.kapruka.com/contactUs/downloadapp.jsp
      - link "kapruka online app" [ref=e171] [cursor=pointer]:
        - /url: https://apps.apple.com/us/app/kapruka/id1367410203
        - img "kapruka online app" [ref=e172]
      - link "kapruka online app" [ref=e173] [cursor=pointer]:
        - /url: https://play.google.com/store/apps/details?id=com.kapruka.kaprukamobile
        - img "kapruka online app" [ref=e174]
    - paragraph [ref=e175]:
      - link "Read About Kapruka" [ref=e176] [cursor=pointer]:
        - /url: https://www.kapruka.com/contactUs/about.html
      - text: "|"
      - link "Reviews" [ref=e177] [cursor=pointer]:
        - /url: https://www.kapruka.com/contactUs/kapruka_reviews.jsp
      - text: "|"
      - link "Refund & Returns" [ref=e178] [cursor=pointer]:
        - /url: https://www.kapruka.com/shop/returns-refunds-and-other-policies-of-kapruka
      - text: "|"
      - link "Careers" [ref=e179] [cursor=pointer]:
        - /url: https://blog.kapruka.com/kapruka_careers
      - text: "|"
      - link "FAQs" [ref=e180] [cursor=pointer]:
        - /url: https://www.kapruka.com/shop/faq
    - paragraph [ref=e181]:
      - link "Lanka Copyright":
        - /url: https://kapruka.com/sitemap.xml
      - text: Kapruka.com Online Shopping for
      - link "Sri Lankans" [ref=e182] [cursor=pointer]:
        - /url: https://en.wikipedia.org/wiki/Sri_Lanka
      - text: around the world.
    - generic [ref=e184]:
      - link "Facebook" [ref=e185] [cursor=pointer]:
        - /url: https://www.facebook.com/kaprukafans
        - img "Facebook" [ref=e186]
      - link "Twitter" [ref=e187] [cursor=pointer]:
        - /url: https://twitter.com/kapruka
        - img "Twitter" [ref=e188]
      - link "Instagram" [ref=e189] [cursor=pointer]:
        - /url: https://www.instagram.com/kapruka
        - img "Instagram" [ref=e190]
      - link "LinkedIn" [ref=e191] [cursor=pointer]:
        - /url: https://www.linkedin.com/company/kapruka-com
        - img "LinkedIn" [ref=e192]
      - link "YouTube" [ref=e193] [cursor=pointer]:
        - /url: https://www.youtube.com/@kaprukatube
        - img "YouTube" [ref=e194]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://www.kapruka.com/shops/customerAccounts/accountNew.jsp?origination=regular');
  5  | 
  6  | 
> 7  |   await page.getByRole('textbox',{name:'firstName'}).fill('Nikhil')
     |                                                      ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  8  |  /*  await page.getByRole('combobox', { name: 'From' }).fill('pune');
  9  |   await page.getByRole('heading', { name: 'Swargate, Pune' }).click();
  10 |   await page.getByRole('heading', { name: 'Mumbai' }).click();
  11 |   await page.getByRole('combobox', { name: 'Select Date of Journey.' }).click();
  12 |   await page.getByRole('button', { name: 'Wednesday, June 24,' }).click();
  13 |   await page.getByLabel('', { exact: true }).check();
  14 |   await page.getByLabel('Got it').click();
  15 |   await page.getByRole('button', { name: 'Search buses' }).click();
  16 |   await expect(page.getByRole('status', { name: 'Search results update' })).toContainText('buses found'); */
  17 | 
  18 |   await page.waitForTimeout(5000)
  19 | });
  20 | 
  21 | 
  22 | //npx playwright test  tests/codegentest.spec.ts --headed
  23 | 
```