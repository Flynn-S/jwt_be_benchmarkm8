import express from "express";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import cors from "cors";

const server = express();
const port = process.env.PORT || 3001;
