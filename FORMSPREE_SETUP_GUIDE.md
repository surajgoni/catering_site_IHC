# 🚀 Formspree Setup Guide for Saffron Caterers

## Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Go to **[https://formspree.io](https://formspree.io)**
2. Click **"Get Started"** 
3. Sign up with your email: `nashvilledigitalgroup@gmail.com`
4. Verify your email address

### Step 2: Create Your Form
1. After logging in, click **"+ New Form"**
2. Form Name: `Saffron Caterers Contact Form`
3. Copy the **Form ID** (looks like: `xpznqqlj`)

### Step 3: Update Your Website
1. Open `index.html` in your text editor
2. Find this line (around line 313):
   ```html
   <form id="contactForm" action="https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID" method="POST">
   ```
3. Replace `REPLACE_WITH_YOUR_FORM_ID` with your actual Form ID:
   ```html
   <form id="contactForm" action="https://formspree.io/f/xpznqqlj" method="POST">
   ```

### Step 4: Test Your Form
1. Open your website in a browser
2. Fill out the contact form
3. Click "Send Inquiry"
4. Check your email: `nashvilledigitalgroup@gmail.com`

## ✅ What You'll Receive

**Email Subject:** New Catering Inquiry from Saffron Caterers Website

**Email Content:**
```
From: customer@example.com (automatically set as reply-to)

Name: John Smith
Phone: (555) 123-4567
Event Type: Wedding
Event Date: 2024-12-15
Message: Looking for catering for my wedding reception for 150 guests...
```

**Additional Recipients:**
- Primary: `nashvilledigitalgroup@gmail.com` (you)
- CC: `info@saffronhospitalitygroup.us` (business email)

## 🎯 Features Included

✅ **Automatic Email Notifications** - Get emails instantly when someone submits the form  
✅ **Spam Protection** - Formspree filters out spam automatically  
✅ **Thank You Page** - Customers see a professional thank you message  
✅ **Mobile Responsive** - Form works perfectly on all devices  
✅ **Required Fields** - Name, email, event type, and message are required  
✅ **Professional Formatting** - Clean, organized email layout  

## 🔧 Optional Customizations

### Change Email Subject
Edit line 316 in `index.html`:
```html
<input type="hidden" name="_subject" value="Your Custom Subject Here">
```

### Remove CC Email
Delete or comment out line 317 in `index.html`:
```html
<!-- <input type="hidden" name="_cc" value="info@saffronhospitalitygroup.us"> -->
```

### Custom Thank You Page
The form redirects to `thank-you.html` - customize this page as needed.

## 📊 Formspree Dashboard

After setup, you can:
- View all form submissions
- Export data to CSV
- Set up webhooks
- Configure spam filtering
- Add team members

## 🆓 Free Plan Limits

- **50 submissions per month** (perfect for most small businesses)
- **Formspree branding** in emails (can be removed with paid plan)
- **Basic spam filtering**

## 💰 Upgrade Options

**Gold Plan ($10/month):**
- 1,000 submissions/month
- No Formspree branding
- Advanced spam filtering
- File uploads
- Integrations (Zapier, etc.)

## 🚨 Troubleshooting

**Form not working?**
1. Check that you replaced `REPLACE_WITH_YOUR_FORM_ID` with your actual Form ID
2. Make sure your website is uploaded to a web server (not just local files)
3. Check spam folder for test emails

**Not receiving emails?**
1. Verify your Formspree account email
2. Check if the form endpoint URL is correct
3. Test with a different email address

## 📞 Support

- **Formspree Help:** [https://help.formspree.io](https://help.formspree.io)
- **Form Testing:** Use your actual website URL (not local files)

---

**🎉 Once set up, your contact form will be fully functional and you'll start receiving catering inquiries immediately!**

