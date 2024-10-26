from selenium import webdriver
from selenium.webdriver.common.by import By

chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("detach", True)

driver = webdriver.Chrome(options=chrome_options)
driver.get("https://bolt.eu/sv-se/")

# Accept cookies
cookie_button = driver.find_element(By.XPATH, '//*[@id="cookiebanner-bottom"]/div/div[3]/button[3]')
cookie_button.click()

# Click menu button
menu_button = driver.find_element(By.XPATH, '//*[@id="primaryNavigation"]/nav/ul[2]/li[4]/button')
menu_button.click()

# Find SVG icons with the class "pt-0.5" using a CSS selector
svg_icons = driver.find_elements(By.CSS_SELECTOR, ".pt-0\\.5")
svg_icons.insert(0, "item")

# Collect only the odd-indexed elements (1, 3, 5, ...)
svg_icons_list = [svg_icons[i] for i in range(len(svg_icons)) if i % 2 != 0]  # Use [] for a list
new_svg_list = []
# Print each SVG icon's outer HTML
for index, svg in enumerate(svg_icons_list):
    print(f"SVG Icon {index + 1}:")
    new_svg_list.append(svg.get_attribute('innerHTML'))
    with open("svg_lists_output.txt", "w") as file:
        for item in new_svg_list:
            file.write(item + "\n\n")
# Print the number of SVG icons in the list
print("\nTotal SVG Icons (odd indices):", len(svg_icons_list))

