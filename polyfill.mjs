/*globals self */
import * as ac from "."

const global =
    typeof window !== "undefined" ? window :
    typeof self !== "undefined" ? self :
    /* otherwise */ undefined

if (global) {
    if (typeof global.AbortController === "undefined") {
        global.AbortController = ac.AbortController
    }
    if (typeof global.AbortSignal === "undefined") {
        global.AbortSignal = ac.AbortSignal
    }
}
