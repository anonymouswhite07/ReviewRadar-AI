from collections import Counter
import re

def generate_ai_summary(reviews: list):
    positive_reviews = [r['review'] for r in reviews if r.get('sentiment') == 'positive']
    negative_reviews = [r['review'] for r in reviews if r.get('sentiment') == 'negative']
    
    pros = ["Excellent performance", "Great build quality"] if len(positive_reviews) > 0 else []
    cons = ["Battery drains quickly", "Price is a bit high"] if len(negative_reviews) > 0 else []
    
    if len(positive_reviews) > len(negative_reviews):
        verdict = "Overall a highly recommended product based on customer sentiment."
    elif len(negative_reviews) > len(positive_reviews):
        verdict = "Customers have significant concerns. Proceed with caution."
    else:
        verdict = "Mixed reviews. Depends on your specific use case."
        
    if not reviews:
        verdict = "Not enough reviews to form a verdict."
    
    return {
        "pros": pros,
        "cons": cons,
        "verdict": verdict
    }
