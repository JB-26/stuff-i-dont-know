import { test, expect } from '@playwright/test'

test('Page loads successfully', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Update the URL as needed
    const title = await page.title();
    expect(title).toBe("Stuff I don't know!"); // Update with your actual site title
});


test('Check for important content', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Update the URL as needed

    // Check if the heading is present
    const heading = await page.textContent('[data-testid="main-heading"]');
    expect(heading).toBe("Stuff I don't know!   🎙️");
    
    // Check if subtitle is present
    const subtitle = await page.textContent('[data-testid="subtitle"]');
    expect(subtitle).toBe("Ever wonder about the mysteries that surround us every day? Join me, Joshua Blewitt, on a bi-weekly journey into the unknown with my podcast, “Stuff I Don't Know!“");

    // Check if paragraph is present
    const paragraph = await page.textContent('[data-testid="paragraph"]');
    expect(paragraph).toBe("In this show, we dive headfirst into the vast sea of knowledge, exploring everything from the commonplace, like the inner workings of TVs and fridges, to the complexities of cutting-edge subjects like quantum computing and astrophysics.  But here's the twist – I'm not an expert. I'm just a curious mind trying to make sense of the world. Every episode, I take on a new challenge, unraveling the intricacies of a topic I know nothing about. It's like learning on the go, and I want you to be part of the adventure.  So, why embark on this quest for the unknown? Because understanding the unfamiliar is a thrilling journey, and the best part is, you get to be my co-pilot. Together, we'll laugh, question, and explore the depths of knowledge, making the complex seem a little less daunting.  Tune in every fortnight as I stumble through uncharted territories, armed with curiosity and a microphone. The more we learn, the more we realise how much stuff we don't know.");
});

test('Image is displayed', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Update the URL as needed

    // Wait for the image to load
    await page.waitForSelector('[data-testid="image"]');

    // Check if the image is visible
    const isImageVisible = await page.isVisible('[data-testid="image"]');
    expect(isImageVisible).toBe(true);
});
