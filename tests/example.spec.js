import  {test, expect} from "@playwright/test" ;

test("demo test", async ({page}) => {
  expect(1.0).toBe(5.0)
})

test("second", async ({page}) => {
  expect(5.0).toBe(5.0)
})

test("name", async ({page}) => {
  expect("nikki").toBe("nikki")
})