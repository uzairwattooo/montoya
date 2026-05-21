import { pgTable, text, boolean, timestamp, uuid, integer, jsonb } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const profile = pgTable("profile", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull().references(() => user.id),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phone: text("phone"),
  country: text("country"),
  role: text("role").default("client"),
  agreeTerms: boolean("agree_terms").default(false),
  agreePrivacy: boolean("agree_privacy").default(false),
});

export const homeLoanApplications = pgTable("home_loan_applications", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  residentialAddress: text("residential_address").notNull(),
  employmentStatus: text("employment_status").notNull(),
  employerName: text("employer_name").notNull(),
  employerContactNumber: text("employer_contact_number"),
  monthlyIncome: integer("monthly_income").notNull(),
  requestedLoanAmount: integer("requested_loan_amount").notNull(),
  loanPurpose: text("loan_purpose").notNull(),
  estimatedPropertyValue: integer("estimated_property_value").notNull(),
  documents: jsonb("documents"),
  additionalComments: text("additional_comments"),
  creditCheckConsent: boolean("credit_check_consent").default(false),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const developmentLoanApplications = pgTable("development_loan_applications", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  siteAddress: text("site_address").notNull(),
  developmentType: text("development_type").notNull(),
  currentZoning: text("current_zoning"),
  purchasePrice: integer("purchase_price").notNull(),
  currentDebt: integer("current_debt"),
  expectedConstructionCosts: integer("expected_construction_costs").notNull(),
  expectedTotalSalesPrice: integer("expected_total_sales_price").notNull(),
  documents: jsonb("documents"),
  projectDescription: text("project_description"),
  consent: boolean("consent").default(false),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
export const developmentPartnershipApplications = pgTable(
  "development_partnership_applications",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    siteAddress: text("site_address").notNull(),
    developmentType: text("development_type").notNull(),
    currentZoning: text("current_zoning"),
    purchasePrice: integer("purchase_price").notNull(),
    currentDebt: integer("current_debt"),
    expectedConstructionCosts: integer("expected_construction_costs").notNull(),
    expectedTotalSalesPrice: integer("expected_total_sales_price").notNull(),
    documents: jsonb("documents"),
    projectDescription: text("project_description"),
    consent: boolean("consent").default(false),
    status: text("status").notNull().default("pending"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  }
);
export const internationalDevelopmentApplications = pgTable(
  "international_development_applications",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    organizationName: text("organization_name"),
    rolePosition: text("role_position"),
    primaryCountry: text("primary_country").notNull(),
    additionalCountries: text("additional_countries"),
    projectLocation: text("project_location"),
    projectScale: text("project_scale").notNull(),
    estimatedProjectValue: integer("estimated_project_value"),
    projectType: text("project_type").notNull(),
    projectTimeline: text("project_timeline"),
    internationalPartners: text("international_partners"),
    projectDescription: text("project_description").notNull(),
    documents: jsonb("documents"),
    status: text("status").default("pending"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  }
);