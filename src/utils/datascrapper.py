import json
import time
from playwright.sync_api import sync_playwright

BASE_URL = "https://www.rajtechconsulting.com/"

# -------------------------------------------------------
# BUTTON STRUCTURE EXACTLY AS REQUESTED BY YOU
# -------------------------------------------------------

SCRAPE_STRUCTURE = {
    "home": {
        "About Me": None,
        "Document Resume": {
            "Quality assurance engineer": None,
            "SDET": None,
            "Business Systems Analyst": None,
            "Application Support Engineer": None,
            "Technical Consultant": None,
            "Data Analyst": None
        }
    },
    "Skills": {
        "Technical": None,
        "AI/LLMs": None,
        "Compliance & Processes": None,
        "Leadership": None,
        "other tools & platforms": None
    },
    "Services": {
        "QA engineer": None,
        "SDET": None,
        "Business Systems Analyst": None,
        "Application Support Engineer": None,
        "Technical Consultant": None,
        "Data Analyst": None,
        "AI Consultant": None
    },
    "Projects": {
        "Google Analytics": None,
        "Security GRC Project": None,
        "Bank Configuration Project": None,
        "CRM Implementation Project": None,
        "POS Support Project": None,
        "Java Capstone Project": None,
        "Java Desktop Pos App": None
    },
    "Experience": {
        "2024 - 2022": None,
        "2018 - 2017": None,
        "2017 - 2016": None,
        "2015 - 2009": None
    },
    "Education": {
        "Formal Education": None,
        "IT Training": None,
        "Certifications": None
    },
    "Contact": {
        "Direct Contact": None,
        "Schedule Meeting": None
    }
}

# -------------------------------------------------------
# SCRAPER START
# -------------------------------------------------------

def click_button(page, label):
    """Clicks a button by visible text; waits for UI to update."""
    try:
        page.click(f"text={label}")
        time.sleep(1.2)
        return True
    except:
        print(f"❌ Failed to click: {label}")
        return False


def scrape_visible_content(page):
    """Scrapes only the visible text of the rendered SPA content."""
    return page.inner_text("body").strip()


def scrape_section(page, structure, level=0):
    """Recursively clicks through all levels of menus."""
    scraped = {}

    for label, sub in structure.items():
        indent = "  " * level
        print(f"{indent}👉 Clicking: {label}")

        clicked = click_button(page, label)
        if not clicked:
            scraped[label] = "ERROR: button not found"
            continue

        if sub is None:
            # leaf node → scrape content frame
            scraped_text = scrape_visible_content(page)
            scraped[label] = scraped_text
        else:
            # has sub-buttons → recurse deeper
            scraped[label] = scrape_section(page, sub, level + 1)

    return scraped


# -------------------------------------------------------
# MAIN ENTRY
# -------------------------------------------------------

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        print("🌐 Opening site...")
        page.goto(BASE_URL)
        time.sleep(2)

        print("\n📌 Starting Deep SPA Scrape...\n")
        scraped_data = scrape_section(page, SCRAPE_STRUCTURE)

        browser.close()

    # save
    with open("rajtech_portfolio_scrape.json", "w", encoding="utf8") as f:
        json.dump(scraped_data, f, indent=2, ensure_ascii=False)

    print("\n✔ DONE! Data saved in rajtech_portfolio_scrape.json")


if __name__ == "__main__":
    main()
