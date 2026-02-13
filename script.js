function showSection(id){
  document.querySelectorAll('.section').forEach(sec=>{
    sec.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

function generateCampaign(){
  const p = document.getElementById("campProduct").value;
  const a = document.getElementById("campAudience").value;

  document.getElementById("campOutput").innerText =
`Campaign Strategy for ${p}

Target Audience: ${a}

• Personalized email campaigns
• AI-generated ad creatives
• Conversion-optimized landing pages
• Retargeting ads for high-intent users
• Social media automation`;
}

function generateSalesPitch(){
  const c = document.getElementById("salesClient").value;
  const pain = document.getElementById("salesPain").value;

  document.getElementById("salesOutput").innerText =
`Sales Pitch for ${c}

Problem: ${pain}

Solution:
Our AI platform automates workflows, improves targeting, and boosts conversions using predictive analytics and generative AI.

Value:
• Increased ROI
• Faster sales cycles
• Smart decision making`;
}

function generateLeadInsight(){
  const ind = document.getElementById("leadIndustry").value;
  const size = document.getElementById("leadSize").value;

  document.getElementById("leadOutput").innerText =
`Lead Intelligence Report

Industry: ${ind}
Company Size: ${size}

AI Insights:
• High automation potential
• Strong AI adoption probability
• Ideal for consultative selling
• High-value long-term customer potential`;
}

function predictOutcome(){
  const act = document.getElementById("activity").value;
  const eng = document.getElementById("engagement").value;

  let score = "Moderate";

  if(act > 70 && eng === "High"){
    score = "Very High";
  }else if(act < 40 && eng === "Low"){
    score = "Low";
  }

  document.getElementById("predictOutput").innerText =
`Prediction Result

Engagement Level: ${eng}
Activity Score: ${act}

Conversion Probability: ${score}

Recommendation:
Use personalized offers, AI targeting, and follow-up automation to improve conversion.`;
}
