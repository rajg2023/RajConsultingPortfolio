import matplotlib.pyplot as plt
import os
from collections import defaultdict

# Skills data extracted from the resume
skills_data = {
    'Programming': ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash/Shell'],
    'Testing Tools': ['Selenium', 'JUnit', 'Appium', 'QTP', 'UFT'],
    'CI/CD': ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes'],
    'Frameworks': ['Spring Boot', 'React', 'Tailwind CSS', 'Lucid React', 'Vite'],
    'Tools': ['Git', 'Jira', 'Postman', 'Confluence', 'Tableau', 'Power BI', 'Salesforce', 'Smartsheet', 'Excel'],
    'Cloud': ['Heroku', 'AWS', 'Azure', 'GCP'],
    'Databases': ['MySQL', 'MongoDB', 'PostgreSQL', 'DynamoDB']
}

def generate_skills_chart():
    # Count the number of skills in each category
    categories = list(skills_data.keys())
    counts = [len(skills) for skills in skills_data.values()]
    
    # Create a color palette
    colors = plt.cm.Paired(range(len(categories)))
    
    # Create the pie chart
    plt.figure(figsize=(10, 8))
    wedges, texts, autotexts = plt.pie(
        counts, 
        labels=categories, 
        colors=colors,
        autopct='%1.1f%%',
        startangle=90,
        pctdistance=0.85,
        wedgeprops=dict(width=0.4, edgecolor='w')
    )
    
    # Add a circle at the center to make it a donut chart
    centre_circle = plt.Circle((0, 0), 0.70, fc='white')
    fig = plt.gcf()
    fig.gca().add_artist(centre_circle)
    
    # Equal aspect ratio ensures that pie is drawn as a circle
    plt.axis('equal')
    plt.title('Technical Skills Distribution', pad=20, fontsize=16, fontweight='bold')
    
    # Add legend with skill counts
    legend_labels = [f'{cat} ({count})' for cat, count in zip(categories, counts)]
    plt.legend(
        wedges, 
        legend_labels,
        title="Skill Categories",
        loc="center left",
        bbox_to_anchor=(1, 0, 0.5, 1)
    )
    
    # Save the chart
    output_dir = os.path.join('public', 'images')
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, 'skills_chart.png')
    plt.tight_layout()
    plt.savefig(output_path, bbox_inches='tight', dpi=300, transparent=True)
    plt.close()
    
    print(f"Chart saved to: {output_path}")

if __name__ == "__main__":
    generate_skills_chart()
