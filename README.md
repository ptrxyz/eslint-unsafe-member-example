# eslint-unsafe-member-example

Example to show some weird behavior of ESLint with SvelteKit.
Execute this:

```
pnpm i
pnpm run lint
```

You will see an error like this:
![image](https://user-images.githubusercontent.com/209056/199841255-aef50703-9853-4704-8e54-be415d7b49ed.png)

The first property, `value1` seems to be fine.
However the property `api` is in fact typed and not `any` as ESLint reports.
Typescript correctly shows that:

![image](https://user-images.githubusercontent.com/209056/199842170-d11b1dec-2342-43ad-a56c-fc6f8e11e41b.png)

(relevant files: [./src/routes/+page.svelte](https://github.com/ptrxyz/eslint-unsafe-member-example/blob/1499489041652a24a6fac57e595be607bc58489a/src/routes/%2Bpage.svelte#L6) and [./src/lib/comp.svelte](https://github.com/ptrxyz/eslint-unsafe-member-example/blob/1499489041652a24a6fac57e595be607bc58489a/src/lib/comp.svelte#L1))

